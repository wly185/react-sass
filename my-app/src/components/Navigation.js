import React, { Fragment, useRef, useEffect, useLayoutEffect } from 'react';

import '../css/Navigation.css';

function Navigation(props) {
  const { tabs, getHeight, clickHandler } = props;
  const targetRef = useRef(null);

  useLayoutEffect(() => {
    if (targetRef.current) {
      getHeight(targetRef.current.offsetHeight);
    }
  }, [targetRef]);

  return (
    <Fragment>
      <div className='navigation' ref={targetRef}>
        <h2>navigation</h2>
        {props.tabs && (
          <div className='buttons'>
            {tabs.map((tab) => {
              return (
                <button
                  className='button'
                  key={tab.name}
                  onClick={() => clickHandler(tabs.indexOf(tab))}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Navigation;
