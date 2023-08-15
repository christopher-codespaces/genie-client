import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const FAQ =()=>{
    const faqsList = [
        {
            q: "What types of events do you specialize in?",
            a: "We specialize in planning a wide range of events including birthdays, bridal showers, weddings, corporate gatherings, and more. Our team is dedicated to making your special moments truly memorable.",
        },
        {
            q: "Do you offer customizable event packages?",
            a: "Yes, we understand that every event is unique. We offer customizable event packages tailored to your preferences and needs. Whether you're looking for a specific theme or certain services, we've got you covered.",
        },
        {
            q: "How early should I book your services for my event?",
            a: "We recommend booking our services as early as possible to ensure availability. Popular dates tend to get booked quickly, so getting in touch with us in advance will help us better accommodate your event planning needs.",
        },
        {
            q: "Can you help with venue selection?",
            a: "Absolutely! We have a wide network of venues and locations that we work with. Based on your event type, size, and preferences, we can help you find the perfect venue that suits your vision.",
        },
        {
            q: "What role do you play on the day of the event?",
            a: "On the day of the event, our team will take care of all the logistics and coordination. We'll ensure that everything runs smoothly, from setting up decorations to managing vendors and addressing any unexpected issues, so you can enjoy your event stress-free.",
        },
        {
            q: "Do you provide event design and decoration services?",
            a: "Yes, event design and decoration are one of our specialties. We work closely with you to understand your aesthetic preferences and then create stunning event designs that align with your vision, ensuring a visually captivating experience for your guests.",
        },
        {
            q: "Can you assist with managing the budget for the event?",
            a: "Absolutely. We understand the importance of budget management. Our team will work with you to create a budget plan that covers all aspects of the event. We'll help you allocate funds effectively to achieve the desired outcomes without compromising quality.",
        },
        {
            q: "Do you offer day-of coordination services?",
            a: "Yes, we offer day-of coordination services to ensure that your event goes smoothly on the actual day. We'll manage the timeline, coordinate with vendors, and oversee the execution of the event plan so that you can relax and enjoy the celebration.",
        },
    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard
            key={idx} // Add the key prop here using the idx
            idx={idx}
            faqsList={item}
          />
        ))}
      </div>
    </section>
    )
}

export default FAQ;