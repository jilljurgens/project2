CREATE DATABASE potluck_db;
USE potluck_db;

CREATE TABLE member (
  memberID Int( 11 ) AUTO_INCREMENT NOT NULL,
  name VARCHAR( 255) NOT NULL,
  username VARCHAR( 255 ) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password varchar(255) not null,
  

  PRIMARY KEY ( memberID ) );
  
  

CREATE TABLE member_event (
    eventID int(15) auto_increment NOT NULL,
    memeberID int,
    PRIMARY KEY (eventID),
    FOREIGN KEY (memberID) REFERENCES member(memberID)
);