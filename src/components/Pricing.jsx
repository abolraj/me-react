import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFile, faHourglass, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const pricingData = [
    {
        id: 'full-time',
        icon: faCalendar,
        title: 'Full-time work',
        description: 'Ready to commit to your company full-time',
        price: '$1200 monthly',
        features: ['Web Development'],
        delay: 300
    },
    {
        id: 'fixed-price',
        icon: faFile,
        title: 'Fixed Price Project',
        description: 'Available for specific project roles',
        price: '$12 hourly',
        features: ['Web Development'],
        delay: 500
    },
    {
        id: 'hourly',
        icon: faHourglass,
        title: 'Hourly work',
        description: 'Open for hourly projects',
        price: '$12 hourly',
        features: ['Web Development'],
        delay: 700
    }
];

export default function Pricing() {

    return (
        <section id="pricing" className="mh-pricing py-16 pt-12 lg:pt-24 text-base-content">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="section-title col-span-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="text-3xl md:text-5xl px-6 py-4 font-bold text-center">
                            <FontAwesomeIcon icon={faMoneyBillWave} className="me-4 text-success"/>
                            Pricing Table
                        </h3>
                    </div>
                    <div className="w-full flex flex-wrap justify-around gap-3">
                        {pricingData.map((item) => (
                            <div key={item.id} className="sm:w-1/3 md:w-1/4 flex flex-col grow pricing bg-base-200 shadow-lg p-6 rounded-lg" data-aos="fade-up" data-aos-duration="800" data-aos-delay={item.delay}>
                                <FontAwesomeIcon icon={item.icon} className="text-primary text-4xl mb-4" />
                                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                                <p className="mb-4">{item.description}</p>
                                <h5 className="text-xl font-semibold mb-6">Starting from <span className="text-warning">{item.price}</span></h5>
                                <ul className="mb-6 grow">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="mb-2">{feature}</li>
                                    ))}
                                </ul>
                                <a href="#">
                                    <button className="btn btn-primary btn-block">
                                    Hire Me
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
