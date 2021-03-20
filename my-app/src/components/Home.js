import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div>
        <h3>home</h3>
      </div>
      <h3>welcome!</h3>
      <p>i wanted to be able to write DRY css</p>
      <ul>
        <li>showcase app</li>
        <li>custom style, no 3rd party style library</li>
        <li>responsive design</li>
        <li>modular css via sass</li>
        <li>react and javascript for interactive UI</li>
      </ul>

      <p>
        feel free to click the buttons on the top nav, they open different
        'widgets'
      </p>
      <ul>
        <li>home page</li>
        <li>left navbar that has a sliding transition</li>
        <li>
          sticky top nav bar that appears when you scroll up and disappears when
          you scroll down
        </li>
        <li>
          memory game. tap on any square if you tap on matching squares, they
          will remain open
        </li>
        <li>
          hangman game. either use a keyword on desktop or the UI keyword to
          choose an alphabet. the app starts drawing a hangman when you choose a
          wrong letter. correct letters will appear green and in the underline
          space. the correct answer is given above
        </li>
      </ul>
    </div>
  );
};

export default Home;
