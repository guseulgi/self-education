import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    message : '안녕하세요, 오늘 일정입니다.',
  },
  {
    message : '곧 미팅이 시작됩니다.',
  },
  {
    message : '미팅 이후에는 스케쥴이 없습니다.',
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications : [],
    };
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if(notifications.length < reservedNotifications.length) {
        const idx = notifications.length;
        notifications.push(reservedNotifications[idx]);
        this.setState({
          notifications : notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;