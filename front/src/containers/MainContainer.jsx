import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const MainContainer = () => {
  useEffect(() => {
    const socket = io('http://192.168.10.126:25565');
  }, []);

  return <h1>Main Container</h1>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
