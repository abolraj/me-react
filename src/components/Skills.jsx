import { useEffect, useState } from "react"
import "@components/Skills.css"

export default function Skills({ ...props }) {
    const [skills, setSkills] = useState([
        { name: 'Laravel ❤️', percentage: 86 },
        { name: 'PHP 🔥', percentage: 90 },
        { name: 'MySQL 🔥', percentage: 90 },
        { name: 'REST API', percentage: 89 },
        { name: 'WordPress', percentage: 80 },
        { name: 'Bootstrap 5', percentage: 65 },
        { name: 'React', percentage: 56 },
        { name: 'Tailwind', percentage: 50 },
        { name: 'HTML', percentage: 85 },
        { name: 'CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 88 },
    ])

    const [professionalSkills, setProffesionalSkills] = useState([
        { name: 'Communication', percentage: 95 },
        { name: 'Team Work', percentage: 80 },
        { name: 'Project Management', percentage: 86 },
        { name: 'Creativity', percentage: 70 },
        { name: 'Hard Work', percentage: 90 },
        { name: 'Flexible', percentage: 80 },
        { name: 'On Time', percentage: 90 },
    ])

    const progressAnimDuration = 1000 // ms
    const progressAnimSteps = 200
    const progressStepDuration = parseInt(progressAnimDuration / progressAnimSteps)

    useEffect(() => {

        // Animate radial progresses when visbile within window
        document.querySelectorAll(".start-animation-in-scroll")
            .forEach(el => {
                document.addEventListener("scroll", function (e) {
                    if (el.getBoundingClientRect().bottom <= window.innerHeight && !el.classList.contains('started-animation-in-scroll')) {
                        el.classList.add('started-animation-in-scroll')
                        const value = parseInt(window.getComputedStyle(el).getPropertyValue('--dest-value'))
                        let preValue = 0
                        el.style.setProperty('--value', 0)
                        const progressStepValue = value / progressAnimSteps
                        const intervalId = setInterval(() => {
                            preValue += progressStepValue
                            el.style.setProperty('--value', preValue)
                        }, progressStepDuration)
                        setTimeout(() => {
                            clearInterval(intervalId)
                            el.style.setProperty('--value', Math.min(preValue, value))
                        }, progressAnimDuration)
                    }
                })
            })

    }, [])

    return (
        <section id="skills" className="py-12 pt-12 lg:pt-24 text-base-content">
            <div className="container mx-auto sm:px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Skills</h2>
                    <p className="text-lg opacity-85">
                        A comprehensive list of my technical and professional skills</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="space-y-8">
                            <div data-aos="progress-fade-up" data-aos-duration="800" data-aos-delay="300" className="sm:p-6 rounded-lg" >
                                <h3 className="border-b-2 border-base-content text-2xl font-semibold mb-4">
                                    Technical Skills</h3>
                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center">
                                                <span>
                                                    {skill.name}</span>
                                                <span>
                                                    {skill.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-base-100 rounded-full h-2 overflow-hidden mt-2">
                                                <div className="progress-bar bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] h-full rounded-full" style={{ width: `${skill.percentage}%` }}>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div data-aos="radial-progress-fade-up" data-aos-duration="800" data-aos-delay="500" className="sm:p-6 rounded-lg" >
                            <h3 className="border-b-2 border-base-content text-2xl font-semibold mb-4">
                                Professional Skills</h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {professionalSkills.map((skill, index) => (
                                    <li key={index} className="flex flex-wrap max-[450px]:flex-col max-sm:flex-row-reverse gap-2 sm:flex-col sm:items-center">
                                        <div className="start-animation-in-scroll radial-progress text-[#FC466B] mx-auto" style={{ '--value': 0, '--dest-value': skill.percentage }}>
                                            {skill.percentage}%</div>
                                        <div className="sm:hidden max-[450px]:hidden divider divider-start grow text-lg my-auto">{skill.name}</div>
                                        <span className="hidden max-[450px]:block sm:block text-lg">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}