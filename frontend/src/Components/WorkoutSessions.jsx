import React from 'react'

export const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Push your limits with dynamic workout sessions designed to strengthen your body and boost your endurance.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Level up your fitness with our featured bootcamps—intense, results-driven sessions designed to push you to your peak.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Full-Body Strength Bootcamp</h4>
            <p>
            Build total-body strength with a mix of bodyweight exercises and resistance training. This bootcamp focuses on all major muscle groups for a powerful, balanced workout
            </p>
          </div>
          <div>
            <h4>HIIT Fat Burn Bootcamp</h4>
            <p>
            A high-intensity interval training (HIIT) bootcamp designed to torch calories and boost cardiovascular fitness. Short bursts of intense exercise followed by rest will get your heart pumping
            </p>
          </div>
          <div>
            <h4>Core & Abs Bootcamp</h4>
            <p>
            Focused on building a strong core, this bootcamp targets your abs, obliques, and lower back with a variety of exercises that improve stability, balance, and core strength
            </p>
          </div>
          <div>
            <h4>Cardio & Endurance Bootcamp</h4>
            <p>
            A cardio-centric bootcamp aimed at enhancing stamina and endurance. This session includes running drills, jumping exercises, and other heart-pumping moves to elevate your fitness levels
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;