import { TextGlow, TextGradient } from "../uikit/Text";
import { Link } from "react-router-dom";
import { Card } from "../uikit/Card";
import { CardContainer } from "../uikit/Containers";
const proyects = [
  { id: "1", name: "Web Dev FT", date: "October 2018 " },
  { id: "2", name: "Web Dev FT", date: "Novembver 2017 " },
  { id: "3", name: "Web Dev FT", date: "April 2018 " },
  { id: "4", name: "Web Dev FT", date: "September 2019 " },
  { id: "5", name: "Web Dev FT", date: "January 2020 " },
  { id: "6", name: "Web Dev FT", date: "July 2021 " },
];

/* 
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
padding: 1rem;
flex-grow: 1;
*/
const PartTime = () => {
  return (
    <section style={{ marginBottom: "7em" }}>
      <header>
        <TextGlow>
          Part Time <TextGradient>Projects Ahead</TextGradient>
        </TextGlow>

        <TextGlow>Chose your Team</TextGlow>
      </header>

      <CardContainer>
        {proyects.map((item) => {
          return (
            <Link
              to={`/classmodules/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card transBack key={item.id}>
                <div style={{ height: "90%", width: "inherit" }}>
                  <div className="card-team">
                    <img
                      src="https://res.cloudinary.com/diurivj/image/upload/v1548777591/Cohorts/wdptjul18.jpg"
                      alt="ironhackers"
                      style={{ height: "inherit", width: "inherit" }}
                    />
                  </div>
                  <div className="card-low-text-container">
                    <TextGradient>{item.name}</TextGradient>
                    <TextGlow>{item.date}</TextGlow>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </CardContainer>
    </section>
  );
};

export default PartTime;
