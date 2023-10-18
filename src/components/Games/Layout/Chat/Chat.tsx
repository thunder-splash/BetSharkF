import {useState} from "react";
import styles from "./chat.module.css"
import Message from "../../Modules/ChatMessage/Message"

export default function Chat() {

    const [message, setMessage] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    let [online, setOnline] = useState("50");

    let arrProps = [
        {
            name: "janstay123",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },
        {
            name: "bebra",
            time: "09:25 pm",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBzQ17qynIcEYGQoQBshNnpMoDYWfyClUvw&usqp=CAU",
            message: "I type thing in chat.",
        },
        {
            name: "janstay",
            time: "09:25 pm",
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: "I’ve booked a spot on the ava if anything, so I’m looking forward to it.",
        },

    ]

    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        arrProps.push({
            name: "username",
            time: new Date().toLocaleTimeString(),
            avatar: "https://yt3.googleusercontent.com/9K8pKqHnNx5tIzq8T4XCncUvhg5lcmPT8-ISvL99nOh7kCalkVFsAtil5l11HFK1e_O3L5y6ePI=s900-c-k-c0x00ffffff-no-rj",
            message: message,
        });
        setMessage("");
    }

    return (
        <div className={`flex flex-col ${styles.main}`}>
            {/* <div className={`flex flex-col ${styles.wrapper}`}> */}
            <div className={`flex justify-between ${styles.header}`}>
                <div className={`flex ${styles.title}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z"
                            stroke="#5271FF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className={`text-base font-semibold`}>ONLINE CHAT</h2>
                </div>
                <div className={`flex ${styles.online}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3" cy="3" r="3" fill="#17A07F"/>
                    </svg>
                    <h3 className={`text-sm font-semibold`}>{online}</h3>
                </div>
            </div>
            <div className={`${styles.content}`}>
                {arrProps.map((props, index) => (
                    <Message key={index} {...props} />
                ))}
            </div>
            <form className={`${styles.sendMessage}`} onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Message..."
                    value={message}
                    onChange={handleInputChange}
                    style={{outline:"none"}}
                />
                <button type="submit">
                    <img src="/send-mess.svg" alt="submit"/>
                </button>
            </form>
            {/* </div> */}
        </div>
    );
}