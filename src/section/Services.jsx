import React from 'react';


const features = [
    {name: 'Stump Grinding', description: 'Here we are grinding the stump to grade level or below(customers preference)'},
    {name: 'Stump Removal', description: 'The removal of a stump has many variables such as age of tree, kind of tree and will require heavy equipment.'}

]
export default function Services() {

    return (
        <div className="bg-slate-800 dark:bg-gray-900">
            <div
                className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center text-white dark:text-gray-900 sm:text-4xl">Grinding <br/>vs. <br/>Removal</h2>
                    <p className="mt-4 text-white dark:text-gray-900">
                        Stump grinding will leave the stump in the ground, where it will eventually decompose. On the other hand, stump removal will involve removing the stump from your property, which is more invasive and may involve the use of chemicals that can cause small disturbances to the surrounding soil.
                    </p>

                    <dl className="sm:mt-6 mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-8">
                    <img
                        src="https://i.imgur.com/4k3JmG9.png"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://i.imgur.com/4k3JmG9.png"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}


