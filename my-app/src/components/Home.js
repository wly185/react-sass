import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <header>
        <h3>home</h3>
      </header>

      <main>
        <ul>
          <li>advantages of react and sass</li>
          <li>react and sass are modular</li>
          <li>sass allows DRY and modular css</li>
          <li>separate css files for each component</li>
          <li>modular styling, scope restricted to each react component</li>
          <li>custom style, no 3rd party style library</li>
        </ul>

        <ul>
          <li>features</li>
          <li>responsive design</li>
          <li>react and javascript for interactive UI</li>
        </ul>

        <ul>
          <li>specs</li>
          <li>home page detailing what the app is about</li>
          <li>left navbar that has a sliding transition</li>
          <li>
            sticky top nav bar that appears when you scroll up and disappears
            when you scroll down
          </li>
          <li>
            memory game. tap on any square if you tap on matching squares, they
            will remain open
          </li>
          <li>
            hangman game. either use a keyword on desktop or the UI keyword to
            choose an alphabet. the app starts drawing a hangman when you choose
            a wrong letter. correct letters will appear green and in the
            underline space. the correct answer is given above
          </li>
        </ul>
        <p>
          feel free to click the buttons on the top nav, they open different
          'widgets'
        </p>
      </main>
    </div>
  );
};

export default Home;
