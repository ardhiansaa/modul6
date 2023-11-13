import React from "react";
import "./AboutPages.css";
const profileData = [
  {
    nama: "Muhamad Ardhian",
    nim: "21120121130075",
    fotoUrl: "https://avatars.githubusercontent.com/u/116475964?v=4",
  },
  {
    nama: "M Aufa Tsaqief ",
    nim: "21120121140137",
    fotoUrl: "https://avatars.githubusercontent.com/u/116475964?v=4",
  },
  {
    nama: "Irawan Habib",
    nim: "21120121130064",
    fotoUrl: "https://avatars.githubusercontent.com/u/116475964?v=4",
  },
  {
    nama: "Daryl Krisna",
    nim: "21120121140135",
    fotoUrl: "https://avatars.githubusercontent.com/u/116475964?v=4",
  },
];
function AboutPage() {
  return (
    <div>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <div className="profile-card" key={index}>
            <img src={data.fotoUrl} alt={data.nama} />
            <h3>{data.nama}</h3>
            <p>NIM: {data.nim}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AboutPage;
