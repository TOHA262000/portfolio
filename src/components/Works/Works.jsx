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
                <div className="content">
                    <div className="left">
                        <div className="imageContainer">
                            <img src="assets/mobile.png" alt="" />
                        </div>
                        <h2>Mobile Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus dolore perspiciatis odio quo quia beatae possimus voluptas, officia distinctio.</p>
                        <span>Project</span>
                    </div>
                    <div className="right">
                        <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/5e9ccde6e014f93547a7a86f_5e8668c4f6f4ab79d83d9570_biznus.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <img className='left arrow' src="assets/arrow.png" alt="" />
            <img className='right arrow' src="assets/arrow.png" alt="" />
        </div>
    );
};

export default Works;