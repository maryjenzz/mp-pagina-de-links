import profileData from "./profile.json";
console.log(profileData);

const avatar = document.querySelector(".card-header__profile-image");
const namePerson = document.querySelector(".card-header__name");
const lastName = document.querySelector(".card-header__last-name");
const description = document.querySelector(".card-header__description");
const cardLinks = document.querySelector(".card__links");
const socialLinks = document.querySelector(".card__social-links");

avatar.src = profileData.avatar;
avatar.alt = `Foto de perfil de ${profileData.name}  ${profileData.lastName}`;

lastName.textContent = profileData.lastName;
namePerson.textContent = profileData.name;
namePerson.appendChild(lastName);

description.textContent = profileData.description;

profileData.links.forEach((links) => {
  const itemList = document.createElement("li");
  const linksList = document.createElement("a");

  linksList.href = links.href;
  linksList.textContent = links.text;
  linksList.target = "_blank";

  itemList.appendChild(linksList);
  cardLinks.appendChild(itemList);
});

profileData.socialLinks.forEach((redeSocialLinks) => {
  const itemList = document.createElement("li");
  const linksList = document.createElement("a");
  const imgList = document.createElement("img");

  imgList.src = redeSocialLinks.icon;
  imgList.alt = `Ícone de ${redeSocialLinks.name}`;
  linksList.href = redeSocialLinks.href;
  linksList.target = "_blank";

  linksList.appendChild(imgList);
  itemList.appendChild(linksList);
  socialLinks.appendChild(itemList);
});
