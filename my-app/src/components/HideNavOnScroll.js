import React, { Fragment, useState, useEffect, useRef } from 'react';

import '../css/HideNavOnScroll.css';

const usePreviousValue = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
const HideNavOnScroll = (props) => {
  const [height, setHeight] = useState(0);
  const refTopNav = useRef(null);
  useEffect(() => {
    setHeight(refTopNav.current.clientHeight);
  }, []);

  const [scrollPos, setScrollPos] = useState(0);
  const onScroll = (e) => {
    setScrollPos(e.target.scrollTop);
  };

  const [value, setValue] = useState('');
  const prevValue = usePreviousValue(scrollPos);

  const [display, setDisplay] = useState('hide');

  return (
    <Fragment>
      <div className='hide-nav-onscroll'>
        <div onScroll={onScroll} className='frame'>
          <div
            ref={refTopNav}
            className={`topNav ${scrollPos - prevValue <= 0 ? 'show' : 'hide'}`}
          >
            this will be hidden on scroll down and appear on scroll up
          </div>

          <div className='paragraphs'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              ipsum ut neque mattis congue a vel ex. Pellentesque eleifend eu
              eros eget suscipit. Nunc egestas blandit turpis et facilisis. Nunc
              viverra risus velit, a viverra odio malesuada at. Nullam id
              consequat risus. Pellentesque tincidunt, ante et ornare placerat,
              velit sapien lacinia tortor, eget vulputate odio risus aliquet
              risus. Praesent tempor mauris id velit ultrices interdum. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Integer vitae
              elementum sem. Pellentesque ut nisi in mi ornare ornare. Phasellus
              dictum massa a ligula rhoncus bibendum. Integer posuere, neque nec
              faucibus convallis, quam nisi scelerisque tortor, eu congue arcu
              enim eu nisl. Donec rutrum augue a ex tristique faucibus.
              Phasellus non mi massa. Etiam ex dui, tincidunt id porta id,
              porttitor sit amet libero. Aenean vestibulum massa lorem, quis
              varius neque tempus id.
            </p>
            <p>
              Duis vehicula velit enim, in laoreet quam cursus in. Maecenas
              fermentum est eu ante tincidunt convallis. Vestibulum consequat
              tincidunt metus, ac venenatis justo feugiat et. Etiam rutrum
              tellus tellus. Nam eget justo risus. Vivamus volutpat sem eu
              faucibus semper. Nunc condimentum volutpat nisl ut luctus. In
              mattis est urna. Cras tempor arcu ac nulla semper sagittis.
              Maecenas a consequat risus. Praesent finibus rhoncus odio, vitae
              posuere magna laoreet a. Sed mollis eleifend tincidunt. Etiam sed
              lorem in libero efficitur molestie. Integer id velit at mauris
              elementum viverra et eget urna. Sed scelerisque vestibulum risus
              vitae congue. Aliquam erat volutpat.
            </p>{' '}
            <p>
              Duis vehicula velit enim, in laoreet quam cursus in. Maecenas
              fermentum est eu ante tincidunt convallis. Vestibulum consequat
              tincidunt metus, ac venenatis justo feugiat et. Etiam rutrum
              tellus tellus. Nam eget justo risus. Vivamus volutpat sem eu
              faucibus semper. Nunc condimentum volutpat nisl ut luctus. In
              mattis est urna. Cras tempor arcu ac nulla semper sagittis.
              Maecenas a consequat risus. Praesent finibus rhoncus odio, vitae
              posuere magna laoreet a. Sed mollis eleifend tincidunt. Etiam sed
              lorem in libero efficitur molestie. Integer id velit at mauris
              elementum viverra et eget urna. Sed scelerisque vestibulum risus
              vitae congue. Aliquam erat volutpat.
            </p>{' '}
            <p>
              Duis vehicula velit enim, in laoreet quam cursus in. Maecenas
              fermentum est eu ante tincidunt convallis. Vestibulum consequat
              tincidunt metus, ac venenatis justo feugiat et. Etiam rutrum
              tellus tellus. Nam eget justo risus. Vivamus volutpat sem eu
              faucibus semper. Nunc condimentum volutpat nisl ut luctus. In
              mattis est urna. Cras tempor arcu ac nulla semper sagittis.
              Maecenas a consequat risus. Praesent finibus rhoncus odio, vitae
              posuere magna laoreet a. Sed mollis eleifend tincidunt. Etiam sed
              lorem in libero efficitur molestie. Integer id velit at mauris
              elementum viverra et eget urna. Sed scelerisque vestibulum risus
              vitae congue. Aliquam erat volutpat.
            </p>{' '}
            <p>
              Duis vehicula velit enim, in laoreet quam cursus in. Maecenas
              fermentum est eu ante tincidunt convallis. Vestibulum consequat
              tincidunt metus, ac venenatis justo feugiat et. Etiam rutrum
              tellus tellus. Nam eget justo risus. Vivamus volutpat sem eu
              faucibus semper. Nunc condimentum volutpat nisl ut luctus. In
              mattis est urna. Cras tempor arcu ac nulla semper sagittis.
              Maecenas a consequat risus. Praesent finibus rhoncus odio, vitae
              posuere magna laoreet a. Sed mollis eleifend tincidunt. Etiam sed
              lorem in libero efficitur molestie. Integer id velit at mauris
              elementum viverra et eget urna. Sed scelerisque vestibulum risus
              vitae congue. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

HideNavOnScroll.propTypes = {};

export default HideNavOnScroll;
