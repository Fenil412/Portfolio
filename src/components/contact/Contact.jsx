import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../../styles';
import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn, fadeIn, textVariant } from '../../utils/motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// template_6zw6f6v
// service_h4ms0ae
// xnyWmkrmoed0PVBti

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    emailjs.send(
      'service_h4ms0ae',
      'template_6zw6f6v',
      {
        from_name: form.name,
        to_name: 'Fenil',
        from_email: form.email,
        to_email: 'fenilchodvadiya@gmail.com',
        message: form.message,
      },
      'xnyWmkrmoed0PVBti'
    ).then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');

      setform({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong. Please try again.');
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "fenilchodvadiya@gmail.com",
      link: "mailto:fenilchodvadiya@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Gujarat, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/fenil-chodvadiya",
      color: "hover:text-blue-500"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/fenilchodvadiya",
      color: "hover:text-gray-400"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/fenilchodvadiya",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className='min-h-screen py-20'>
      {/* Header Section */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className={`${styles.sectionSubText} text-center`}>Get in Touch</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Contact.</h2>
        <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        {/* Contact Form */}
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-gray-800 shadow-2xl">
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-6'>
            
            {/* Name Field */}
            <motion.label 
              variants={fadeIn("up", "spring", 0.1, 0.75)}
              className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 focus:border-cyan-400 ${
                  errors.name ? 'border-red-500' : 'border-transparent'
                }`}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
            </motion.label>

            {/* Email Field */}
            <motion.label 
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 focus:border-cyan-400 ${
                  errors.email ? 'border-red-500' : 'border-transparent'
                }`}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </motion.label>

            {/* Message Field */}
            <motion.label 
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 focus:border-cyan-400 resize-none ${
                  errors.message ? 'border-red-500' : 'border-transparent'
                }`}
              />
              {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
            </motion.label>

            {/* Submit Button */}
            <motion.button
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              type="submit"
              disabled={loading}
              className='bg-gradient-to-r from-cyan-500 to-teal-500 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'>
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : 'Send Message'}
            </motion.button>
          </form>

          {/* Contact Info */}
          <motion.div 
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="text-white font-semibold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={fadeIn("right", "spring", index * 0.1, 0.75)}
                  className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300 group">
                  <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-300">
                    <info.icon className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold text-lg mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                    className={`w-12 h-12 bg-tertiary rounded-full flex items-center justify-center text-secondary ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}>
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[600px] h-[400px] xl:min-h-[700px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")