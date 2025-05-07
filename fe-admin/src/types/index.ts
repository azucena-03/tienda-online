import {
  CategorySchema,
  EtiquetaSchema,
  ProductoCardAPIResponse,
} from "@/utils/schemas";
import { z } from "zod";

export type Card = z.infer<typeof ProductoCardAPIResponse>;
export type Category = z.infer<typeof CategorySchema>;
export type Etiqueta = z.infer<typeof EtiquetaSchema>;
