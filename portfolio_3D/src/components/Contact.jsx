import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Fox from '../models/Fox'

import Alert from '../utils/Alert'
import useAlert from '../utils/useAlert'
import Loader from '../utils/Loader'
import { styles } from "../styles"
import SectionWrapper from "../hoc"
import { slideIn } from "../utils/motion"


const Contact = () => {

  const formRef = useRef();

  const [form, setform] = useState({
    name: '',
    email: "",
    message: '',
  })
  
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");



  const handleChange = (e) => {
    const {name, value} = e.target;

    setform({...form, [name]: value})
  }

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    //temprorary.......
    // alert("Thank you to respond. I will get back to you as soon as possible.");  

    showAlert({
      show: true,
      text: "Thank you for your message 😃",
      type: "success",
    })
    
    setTimeout(() => {
      hideAlert(false);

      setform({
        name: '',
        email: '',
        message: '',
      })

      setCurrentAnimation("idle");
      setLoading(false);
      setform({
        name: "",
        email: "",
        message: "",
      });
    }, [8000])


    //...................

    // emailjs.send(
    //   'your service id',
    //   'your template id',
    //   {
    //     from_name: form.name,
    //     to_name: 'your name [Ravi]',
    //     from_email: form.email,
    //     to_email: 'your receiving mail id [ex: testravikkweb@gmail.com]',
    //     message: form.message,
    //   },
    //   'your public key'
    // )

    // .then(() => {
    //   setLoading(false);
    //   alert("Thank you to respond. I will get back to you as soon as possible.");

    //   setform({
    //     name: '',
    //     email: '',
    //     message: '',
    //   })
    // }), (error) => {
    //   setLoading(false)
    //   console.log(error);
    //   alert('Something went Wrong.')
    // }
  }

  return (
    <div className='white-gradient sm:p-16 p-5 rounded-3xl xl:mt-4 flex xl:flex-row flex-col gap-16 overflow-hidden'>
    {alert.show && <Alert {...alert} />}
    {/* <Alert show={true} text={"Hello ravi "} type={'success'} /> */}
      <motion.div
      variants={slideIn('left', "tween",0.2,1 )}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input type="text" name="name" value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="What's your name?"
            required
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your email</span>
            <input type="email" name="email" value={form.email} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="What's your email address?"
            required
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your message</span>
            <textarea rows='3' name="message" value={form.message} 
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <button
            type="submit"
            name="submit"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween",0.2,1 )}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      
      {/* Fox Animation */}
      <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")