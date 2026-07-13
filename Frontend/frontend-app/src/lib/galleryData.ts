export type GalleryItem = {
  src: string;
  type: "image" | "video";
  alt: string;
};

const galleryBase = "/media/gallery";

export const galleryItems: GalleryItem[] = [
  { src: `${galleryBase}/IMG_0593.MOV`, type: "video", alt: "Ritual Bar in action" },
  { src: `${galleryBase}/edc59c9ab76e4fc3a4e9d5fdb37ae111.mov`, type: "video", alt: "Mobile bar experience" },
  { src: `${galleryBase}/6D2E0DC9-9F06-42AB-B3FF-49C1F78CC965.jpg`, type: "image", alt: "Cacao ceremony moment" },
  { src: `${galleryBase}/IMG_1427.PNG`, type: "image", alt: "Colorful botanical beverage" },
  { src: `${galleryBase}/IMG_5719.PNG`, type: "image", alt: "Ritual Bar setup" },
  { src: `${galleryBase}/IMG_0893.JPG`, type: "image", alt: "Crafted drink presentation" },
  { src: `${galleryBase}/IMG_0907.JPG`, type: "image", alt: "Event beverage service" },
  { src: `${galleryBase}/IMG_0576.JPG`, type: "image", alt: "Mobile bar at gathering" },
  { src: `${galleryBase}/IMG_0577.JPG`, type: "image", alt: "Festival pop-up" },
  { src: `${galleryBase}/IMG_4108.JPG`, type: "image", alt: "Ceremonial cacao pour" },
  { src: `${galleryBase}/IMG_7817.JPG`, type: "image", alt: "Van and bar setup" },
  { src: `${galleryBase}/IMG_7830.JPG`, type: "image", alt: "Outdoor event service" },
  { src: `${galleryBase}/IMG_7833.JPG`, type: "image", alt: "Guests enjoying drinks" },
  { src: `${galleryBase}/IMG_1425.PNG`, type: "image", alt: "Signature mocktail" },
  { src: `${galleryBase}/IMG_1433.PNG`, type: "image", alt: "Botanical elixir" },
  { src: `${galleryBase}/IMG_1565.PNG`, type: "image", alt: "Drink menu display" },
  { src: `${galleryBase}/IMG_3739.PNG`, type: "image", alt: "Vibrant beverage creation" },
  { src: `${galleryBase}/IMG_7395.PNG`, type: "image", alt: "Ritual Bar details" },
  { src: `${galleryBase}/B8200031-02EA-4CAC-BE26-8A799BA5560A.jpg`, type: "image", alt: "Community gathering" },
  { src: `${galleryBase}/C65C8568-EB5A-452E-8B36-737D092537D1.jpg`, type: "image", alt: "Cacao and botanicals" },
  { src: `${galleryBase}/IMG_0899.JPG`, type: "image", alt: "Hand-crafted beverage" },
  { src: `${galleryBase}/IMG_0913.JPG`, type: "image", alt: "Event bar atmosphere" },
  { src: `${galleryBase}/IMG_0963.PNG`, type: "image", alt: "Colorful drink lineup" },
  { src: `${galleryBase}/IMG_0232.PNG`, type: "image", alt: "Festival lounge moment" },
];
