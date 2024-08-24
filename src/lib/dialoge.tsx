import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from 'axios';

export function DialogDemo() {
  const [step, setStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    age: "",
    entrepriseSize: "",
    budget: "",
    email: "",
    phone: "",
    message: "",
  })
  const [error, setError] = useState<string | null>(null)

  const questions = [
    { label: "Quel est votre âge ?", 
      id: "age",
      type: "select",
      options: ["moins de 18 ans", "18-25 ans", "26-35 ans", "36 - 45 ans", "46 - 55 ans", "56 - 65 ans", "plus de 65 ans"],
      required: true
    },
    { 
      label: "Quelle est la taille de votre entreprise ?", 
      id: "entrepriseSize",
      type: "select",
      options: ["1-10 employés", "11-50 employés", "51-200 employés", "201+ employés"]
    },
    { 
      label: "Quel est votre budget ?", 
      id: "budget", 
      type: "select",
      options: ["moins de 1000€", "1000€ - 5000€", "5000€ - 10000€", "10000€ - 20000€", "20000€+"],
      required: true
    },
    { 
      label: "Quel est votre email ?", 
      id: "email", 
      type: "email",
      required: true
    },
  ]

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }))
    setError(null)
  }

  const handleNext = async () => {
    if (step < questions.length - 1) {
      if (questions[step].required && !formData[questions[step].id as keyof typeof formData]) {
        setError(`Veuillez répondre à la question "${questions[step].label}" avant de continuer.`)
        return
      }
      setStep(prev => prev + 1)
    } else {
      const requiredFields = ["age", "budget", "email"]
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
      
      if (missingFields.length > 0) {
        setError(`Veuillez remplir les champs obligatoires suivants : ${missingFields.join(", ")}`)
        return
      }

      const output = {
        ...formData,
        timestamp: new Date().toISOString(),
      };
      
      try {
        const response = await axios.post("/api/api", output);
        console.log("Réponse de l'API:", response.data);
        <Alert>
          <AlertTitle>Demande de devis envoyée avec succès !</AlertTitle>
          <AlertDescription>Nous vous contacterons bientôt.</AlertDescription>
        </Alert>
        setOpen(false) // Ferme le dialogue
        // Réinitialiser le formulaire ici si nécessaire
        setStep(0)
        setFormData({
          age: "",
          entrepriseSize: "",
          budget: "",
          email: "",
          phone: "",
          message: "",
        })
        setError(null)
      } catch (error) {
        console.error("Erreur lors de l'envoi du formulaire:", error);
        setError("Erreur lors de l'envoi de la demande de devis. Veuillez réessayer.");
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4 bg-primary text-white hover:bg-primary-foreground hover:text-black">demande de devis</Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[500px] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">demande de devis</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Veuillez répondre à ces questions pour nous aider à mieux comprendre vos besoins.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {questions.map((question, index) => (
            <div key={question.id} className={`${index !== step ? 'hidden' : ''}`}>
              {question.type === "select" ? (
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor={question.id} className="text-left sm:text-right">
                    {question.label} {question.required && "*"}
                  </Label>
                  <Select onValueChange={(value) => handleInputChange(question.id, value)} required={question.required}>
                    <SelectTrigger className="col-span-1 sm:col-span-3">
                      <SelectValue placeholder="Sélectionnez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      {question.options?.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor={question.id} className="text-left sm:text-right">
                    {question.label} {question.required && "*"}
                  </Label>
                  <Input 
                    id={question.id} 
                    type={question.type}
                    value={formData[question.id as keyof typeof formData]}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className="col-span-1 sm:col-span-3"
                    required={question.required}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleNext} className="w-full sm:w-auto">
            {step < questions.length - 1 ? "Suivant" : "Terminer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}