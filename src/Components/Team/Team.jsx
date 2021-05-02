  
import React from 'react'
import './Team.css'
import styled from 'styled-components'
const Cont = styled.div`
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 20.3%;
  height: 30%;
  margin-bottom: 19px;
  margin-left: 140px;
  padding: 0 8px;
  transition: all 0.8s;
}
.column:hover {
  width: 21%;
  height: 31%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 6px;
  text-align: center;
}
.about-section {
  padding: 50px;
  text-align: center;

  background: transparent;
  color: rgb(20, 0, 0);
}
h2 {
  text-align: center;
  transition: all 0.8s;
  font-size: 28px;
}

.about-section h3 span {
  color: #5c3716;
  font-size: 68px;
}
.about-section h3 {
  color: #000000;
  font: normal 36px "Cookie", cursive;
  margin: 0;
  font-size: 68px;
}
.container {
  padding: 0 16px;
}
.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}
.title {
  color: grey;
}
.button {
  border: 0px;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #695e3d;
  text-align: center;
  cursor: pointer;
  width: 20%;
  height: 20px;
  margin-left: -12px;
  margin-bottom: -12px;
  border-radius: 100px;
  transition: all 0.8s;
}

p {
  color: #d2bdaf;
  transition: all 0.8s;
}

h1 {
  transition: all 2s;
}
h1:hover {
  font-size: 50px;
}
.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #695e3d;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
  background: rgb(77, 50, 20);
  background: linear-gradient(
    90deg,
    rgba(77, 50, 20, 1) 4%,
    rgba(147, 96, 38, 1) 57%,
    rgba(147, 96, 38, 1) 58%,
    rgba(147, 96, 38, 1) 62%,
    rgba(120, 64, 0, 1) 85%,
    rgba(69, 55, 0, 1) 100%
  );
  color: #fff;
  text-decoration: none;
}

@media (max-width: 858px) {
  h1:hover {
    font-size: 30px;
  }
  .column {
    margin-left: 70px;
    width: 70%;
  }
  .column:hover {
    width: 70.9%;
  }
}

`
const ourTeam = () => {
    return(
        <Cont>
<div class="about-section">
    
<h3>Our<span>Team</span></h3>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="team2.png" alt="Jane"></img>
      <div class="container">
        <h2>Mahnoor Nawaz</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="team1.png" alt="Mike" ></img>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="team3.png" alt="John"></img>
      <div class="container">
        <h2>Muhammad Usama</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
      </div>
    </div>
    </div>
    </div>
        </Cont> 
    )
}
export default ourTeam;
