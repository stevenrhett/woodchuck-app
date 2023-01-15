import React from 'react';
import morestumps from "./assets/morestumps.png";


const faqs = [{
    id: 1,
    question: 'How do you make holy water?',
    answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
}, {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
}, {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
}, {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
},]

export default function ContactPage() {
    return (<div className="bg-white">
        <header className="relative">
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src={morestumps}
                    alt="A Bandit stump grinding heavy equipment in action."
                />
                <div
                    className="absolute inset-0 mix-blend-multiply"
                    aria-hidden="true"
                />
            </div>

        </header>


        {/* FAQ */}
        <div className="bg-gray-800">
            <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked
                            questions</h2>
                        <p className="mt-4 text-lg text-white">
                            Can’t find the answer you’re looking for? Reach out to our{' '}
                            <a href="#" className="font-medium text-cyan-600 hover:text-white">
                                customer support
                            </a>{' '}
                            team.
                        </p>
                    </div>
                    <div className="mt-12 lg:col-span-2 lg:mt-0">
                        <dl className="space-y-12">
                            {faqs.map((faq) => (<div key={faq.id}>
                                <dt className="text-lg font-medium text-white">{faq.question}</dt>
                                <dd className="mt-2 text-white">{faq.answer}</dd>
                            </div>))}
                        </dl>

                    </div>
                </div>
            </div>
        </div>
        <ContactPage />
    </div>)

}









