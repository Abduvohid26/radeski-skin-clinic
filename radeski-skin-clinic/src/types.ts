export interface Doctor {
  id: string;
  name: string;
  originalName: string;
  role: string;
  description: string;
  experience: string;
  specialty: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  estimatedPrice: string;
  benefits: string[];
  duration: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  serviceId: string;
  serviceTitle: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: "rejalashtirilgan" | "tasdiqlandi" | "yakunlandi";
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment: string;
}
