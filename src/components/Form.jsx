import { useState } from "react"

const Form = (props) => {

    let img = props.img
    let city = props.city
    let company = props.name
    let id = props.id

    const [formData, setFormData] = useState({
        name:'',
        spaces:'',
        email:'',
        img:img,
        city: city,
        company: company,
        id:id
    })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevSatate) => ({
            ...prevSatate,
            [name]:value,
        }))    

        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onClose()
        props.onAdd(formData)
        console.log(formData)

    }

    console.log(formData)

    return(
        <>
        <div className="form">
            <h2>Request Informataion</h2>
            <form onSubmit={handleSubmit}>
                <section>
                    <label htmlFor='name'>First Name</label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        placeholder="Name"
                        required={true}
                        value={formData.name}
                        onChange={handleChange}
                    />
                     <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email'
                        required={true}
                        onChange={handleChange}
                    />
                     <label htmlFor='spaces'>Spaces Needed</label>
                    <input
                        id='spaces'
                        type='text'
                        name='spaces'
                        placeholder="Number Of Spaces"
                        required={true}
                        value={formData.spaces}
                        onChange={handleChange}
                    />
                </section>
                
                <section>
                    <div className="submit-form-section">
                    <div className="photo-container">
                        <img src={props.img} alt='profile-img-preview'/>
                    </div>
                    <button type='submit'>Submit</button>
                    </div>

                </section>
            </form>
        </div>
        </>
    )
}

export default Form