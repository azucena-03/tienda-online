import { z } from "zod";

export const ProductoSchema = z.object({
  productoId: z.string().uuid(),
  nombre: z.string(),
  descripcion: z.string(),
  marca: z.string(),
  stock: z.number(),
  talla: z.string(),
  imagen: z.string().url(),
  fechaCreacion: z.string(),
  fechaActualizacion: z.string(),
  categoriaId: z.string().uuid(),
  categoriaNombre: z.string(),
  precio: z.object({
    precioId: z.string().uuid(),
    preciorRegular: z.number(),
    promocion: z.number(),
    productoId: z.string().uuid(),
  }),
  estado: z.boolean(),
  etiquetas: z.array(
    z.object({
      etiquetaId: z.string().uuid(),
      nombre: z.string(),
    })
  ),
});

export const ProductCardSchema = ProductoSchema.omit({
  talla: true,
  fechaCreacion: true,
  fechaActualizacion: true,
  categoriaId: true,
  estado: true,
  etiquetas: true,
});

export const ProductoCardAPIResponse = z.array(ProductCardSchema);

export const formSchema = z.object({
  nombre: z
    .string()
    .min(5, { message: "Debe tener 5 o más caracteres" })
    .max(50)
    .trim(),
  descripcion: z
    .string()
    .min(20, { message: "Debe tener 20 o más caracteres" })
    .trim(),
  marca: z.string().min(3, { message: "Debe tener 3 o más caracteres" }).trim(),
  stock: z.number().lte(500, { message: "Número demasiado alto" }).positive(),
  talla: z
    .string({
      required_error: "La Talla es requerida",
    })
    .max(50, { message: "this is too big" })
    .trim(),
  categoriaId: z.string().uuid(),
  precio: z.number().positive(),
  promocion: z.number().positive(),
  imagenUrl: z.any(),
  listaEtiquetas: z.array(z.string().uuid()),
});

export const CategorySchema = z.object({
  categoriaId: z.string().uuid(),
  nombre: z.string(),
});

export const CategoryAPIResponse = z.array(CategorySchema);

export const EtiquetaSchema = z.object({
  etiquetaId: z.string().uuid(),
  nombre: z.string(),
});

export const EtiquetaAPIResponse = z.array(EtiquetaSchema);
