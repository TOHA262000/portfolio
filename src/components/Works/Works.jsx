import React from 'react';
import './works.scss'

const Works = () => {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  return (
    <div className='works' id='works'>
      <div className="slider">
        {data.map(item => (
          <div className="container">
            <div className="content">
              <div className="left">
                <div className="imageContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>Project</span>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>

          </div>
        ))}
      </div>
      <img className='left arrow' src="assets/arrow.png" alt="" />
      <img className='right arrow' src="assets/arrow.png" alt="" />
    </div>
  );
};

export default Works;