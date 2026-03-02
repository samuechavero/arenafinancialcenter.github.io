import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateContactMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const res = await fetch(api.contactMessages.create.path, {
        method: api.contactMessages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(api.contactMessages.create.input.parse(data)),
        credentials: "omit", // Public endpoint
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contactMessages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return api.contactMessages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo lo antes posible.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error al enviar el mensaje",
        description: error.message || "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  });
}
