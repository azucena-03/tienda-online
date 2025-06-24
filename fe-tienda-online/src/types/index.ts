export type Product = {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  seccion: string;
  precio: number;
  valuacion: number;
  marca: string;
  tallas: number[];
  colors: string[];
  peso: number;
  paqueteDimensiones: {
    ancho: number;
    largo: number;
    profundidad: number;
  };
  garantia: string;
  envio: string;
  comentarios: Comentario[];
  politicaDevolucion: string;
  images: string[];
  thumbnail: string;
};

export type Comentario = {
  valuacion: number;
  comentario: string;
  titulo: string;
  fecha: string;
  nombre: string;
  correo: string;
};
