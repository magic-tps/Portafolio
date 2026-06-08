import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tomas Pastor Salazar Portfolio",
    short_name: "Tomas AI Portfolio",
    description:
      "Portafolio de AI Engineering, Computer Vision, Machine Learning y Desarrollo Web.",
    start_url: "/",
    display: "standalone",
    background_color: "#050712",
    theme_color: "#050712",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
