/**
 * Created by KH-DEV on 2017-04-15.
 */
import React, {Component} from 'react';
import util from '../../util/util';

const AgentCheck = ({...props}) => {
  let showcheck = util.checkAgent.ie();
  console.log(!!showcheck);

  return (
    <div>
      {showcheck}
    </div>
  )
};

const Main = (props) => {
  return (
    <div>
      <AgentCheck />
    </div>
  );
};

export default Main;