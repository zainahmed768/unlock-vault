import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Make Pusher available globally for Echo
window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY || "local",
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER || "mt1",

  // Use host and ports from .env
  wsHost: import.meta.env.VITE_PUSHER_HOST || window.location.hostname,
  wsPort: import.meta.env.VITE_PUSHER_PORT || 6001,
  wssPort: import.meta.env.VITE_PUSHER_PORT || 6001,

  // Force TLS only if scheme is https
  forceTLS: import.meta.env.VITE_PUSHER_SCHEME === "https",
  disableStats: true,
  enabledTransports: ["ws", "wss"],

  // Add auth endpoint for private & presence channels
  authEndpoint: "/admin/broadcasting/auth",
  auth: {
    headers: {
      "X-CSRF-TOKEN": document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute("content"),
    },
    withCredentials: true,
  },
});
