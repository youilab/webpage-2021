import React, { useEffect } from "react";

export const Modal = ({ profile, modal }) => {

  useEffect(() => {
    document.title = `${profile.name} | You-i Lab`
  }, [profile])

  return (
    <div className="modal__container">
      <div className="modal__back">
        <p onClick={()=>modal(false)}>BACK</p>
      </div>
    <div className="modal__name-container">
      <h2>{profile.name.toUpperCase()}</h2>
      <h2>{profile.lastname.toUpperCase()}</h2>
    </div>
      <div className="modal__photo">
        <img src={profile.photo} alt="" />
      </div>
      <h3 className="modal__area-text">{profile.area.toUpperCase()}</h3>
      <div className="modal__description-text">
        <p>
            {profile.description}
        </p>
      </div>
      <div className="modal__links-container">
        {
          profile.links.map((l, i)=>(
            <a key={i} href={l.url}><img src={`./Assets/img/icons/perfil-${l.type}.png`} alt={l.type} /></a>
          ))
        }
      </div>
    </div>
  );
};
