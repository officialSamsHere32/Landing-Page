import {useState} from 'react' 
import FooterInput from '../ui/FooterInput'

export default function ContactForm({
  onSubmit,
  title = "Contact Us",
  submitLabel = "Send Message",
}) {
 // hooks
  const [formData, setFormData] = useState({
    email: "",
  })
// hooks for error handling
  const [errors, setErrors] = useState({
    email: "",
  })

   //handle change untuk semua field, menggunakan name attribute untuk menentukan field mana yang berubah
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

   //trigger validation saat submit, jika validasi berhasil maka panggil onSubmit dengan formData
  const handleSubmit = (e) => {
    e.preventDefault()      
    // setisName("samuel christian")
    // function validate akan mengembalikan object error, jika field valid maka value error akan tetap string kosong
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    // object.values akan mengembalikan array dari semua value di object errors, lalu some akan mengecek apakah ada value yang tidak kosong (artinya ada error)
    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "")
    if (hasErrors) {
      alert("Cannot complete the process..")
    } else {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-slate-800 text-center">{title}</h2>

      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="john@example.com"
        autoComplete="email"
      />

      <Button type='submit'>{submitLabel}</Button>
    </form>
  )
}