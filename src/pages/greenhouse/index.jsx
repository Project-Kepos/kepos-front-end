import { PiArrowRight, PiDrop, PiPlant } from 'react-icons/pi'
import { Link, useLoaderData } from 'react-router-dom'

export function Greenhouse() {
  const data = useLoaderData()

  return (
    <main>
      <div>
        <h1>{data.name}</h1>
        <Link to="/dashboard">
          <PiArrowRight />
          Voltar
        </Link>
      </div>

      <section>
        <div>
          <h2>Temperatura</h2>
          <span>{data.temperature}°</span>
        </div>

        <div>
          <h2>Umidade</h2>
          <span>{data.humidity}g/m³</span>
        </div>

        <div>
          <h2>Clima</h2>
          <span>{data.weather}</span>
        </div>
      </section>

      <section>
        {data.modules.map((module) => (
          <div key={module.id}>
            <div>
              <PiPlant />
            </div>
            <div>
              <h3>{module.name}</h3>
              <p>
                <PiDrop />
                {module.humidity}g/m³
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
