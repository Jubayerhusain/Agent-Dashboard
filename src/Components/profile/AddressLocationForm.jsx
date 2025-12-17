import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Helper component to move map when coordinates change
function RecenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lng) map.setView([lat, lng], 14);
  }, [lat, lng]);
  return null;
}

export default function AddressLocationForm() {
  const [form, setForm] = useState({
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    mapLocation: "",
    lat: null,
    lng: null,
  });

  const [loading, setLoading] = useState(false);

  // Auto detect user location
  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        setForm((prev) => ({
          ...prev,
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          mapLocation: `${pos.coords.latitude.toFixed(
            6
          )},${pos.coords.longitude.toFixed(6)}`,
        }));
      },
      () => {
        // fallback Dhaka
        setForm((prev) => ({
          ...prev,
          lat: 23.8103,
          lng: 90.4125,
          mapLocation: "23.810300,90.412500",
        }));
      }
    );
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Update map based on Map Location input
  const handleMapLocationInput = () => {
    const parts = form.mapLocation.split(",").map((v) => parseFloat(v.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const lat = parts[0];
      const lng = parts[1];
      setForm((prev) => ({ ...prev, lat, lng }));
      reverseGeocode(lat, lng);
    } else {
      alert("Invalid coordinates format. Use lat,lng");
    }
  };

  // Reverse geocode to update address inputs from lat/lng
  const reverseGeocode = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      if (data.address) {
        setForm((prev) => ({
          ...prev,
          address: data.address.road || data.address.house_number || prev.address,
          city: data.address.city || data.address.town || data.address.village || prev.city,
          state: data.address.state || prev.state,
          country: data.address.country || prev.country,
          zip: data.address.postcode || prev.zip,
        }));
      }
    } catch (err) {
      console.log("Reverse geocode failed", err);
    }
  };

  // Search map from other inputs
  const searchFromInput = async () => {
    const requiredFields = ["address", "city", "state", "country"];
    for (let f of requiredFields) {
      if (!form[f].trim()) return alert(`${f} is required`);
    }
    const query = `${form.address} ${form.city} ${form.state} ${form.country} ${form.zip}`;
    try {
      setLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        setForm((prev) => ({
          ...prev,
          lat,
          lng,
          mapLocation: `${lat.toFixed(6)},${lng.toFixed(6)}`,
        }));
      } else alert("Location not found");
    } catch (err) {
      console.log(err);
      alert("Failed to search location");
    } finally {
      setLoading(false);
    }
  };

  if (!form.lat || !form.lng) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading map...
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm mt-6 p-3 sm:p-5 space-y-6 sm:mx-4">
      {/* Address Input */}
      <div className="w-full">
        <label className="text-sm font-medium">Address*</label>
        <input
          placeholder="Enter address"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1"
        />
      </div>

      {/* Country, State, City, Zip */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Country *", name: "country" },
          { label: "State *", name: "state" },
          { label: "City *", name: "city" },
          { label: "Zip Code", name: "zip" },
        ].map((f) => (
          <div key={f.name}>
            <label className="text-sm font-medium">{f.label}</label>
            <input
              name={f.name}
              value={form[f.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md mt-1"
              placeholder={`Enter ${f.label.replace("*", "")}`}
            />
          </div>
        ))}
      </div>

      {/* Map Location */}
      <div className="w-full">
        <label className="text-sm font-medium">Map Location</label>
        <div className="w-full flex gap-2 items-center mt-1">
          <input
            placeholder="Lat,Lng"
            name="mapLocation"
            value={form.mapLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />
          <button
            onClick={handleMapLocationInput}
            className="bg-gradient-to-t from-green-500 to-lime-400 text-white px-4 py-2 rounded-md"
          >
            Set
          </button>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={searchFromInput}
        disabled={loading}
        className="bg-gradient-to-t from-green-500 to-lime-400 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search from Inputs"}
      </button>

      {/* Coordinates Display */}
      <input
        readOnly
        value={`${form.lat.toFixed(6)}, ${form.lng.toFixed(6)}`}
        className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded mt-2"
      />

      {/* Map */}
      <div className="h-[60vh] w-full rounded overflow-hidden">
        <MapContainer
          key={`${form.lat}-${form.lng}`} // ensures map re-centers
          center={[form.lat, form.lng]}
          zoom={14}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap"
          />

          <Marker
            position={[form.lat, form.lng]}
            draggable
            eventHandlers={{
              dragend: (e) => {
                const p = e.target.getLatLng();
                setForm((prev) => ({
                  ...prev,
                  lat: p.lat,
                  lng: p.lng,
                  mapLocation: `${p.lat.toFixed(6)},${p.lng.toFixed(6)}`,
                }));
                reverseGeocode(p.lat, p.lng);
              },
            }}
          />

          <RecenterMap lat={form.lat} lng={form.lng} />
        </MapContainer>
      </div>

      {/* Save / Cancel */}
      <div className="flex gap-3">
        <button
          onClick={() => console.log("FINAL DATA:", form)}
          className="bg-gradient-to-t from-green-500 to-lime-400 text-white px-6 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={() => console.log("CANCELLED")}
          className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
