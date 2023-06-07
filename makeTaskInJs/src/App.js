import TaskScreen from "./TaskScreen.js";

export default function App({ $target }) {
    const $button = document.createElement('button');

    $target.appendChild($button);

    $button.textContent = "Task 추가";

    const state = {
        tasks: [
            {
                id: 1,
                name: "디자인 수정사항 반영",
                description: "디자인 수정사항을 반영한다",
                admins: ["Kim", "Park"],
                classifications: ["프론트엔드"],
                isDetailWorks: true,
                detailWorks: [
                    { name: "디테일1", isComplete: true },
                    { name: "디테일2", isComplete: false },
                    { name: "디테일3", isComplte: false },
                ],
                cheerUp: 0,
            },
            {
                id: 2,
                name: "데이터베이스 점검",
                description: "데이터베이스를 점검한다",
                admins: ["Lee", "Park"],
                classifications: ["백엔드"],
                isDetailWorks: false,
                detailWorks: [],
                cheerUp: 0,
            },
        ],
        users: [
            "Kim", "Park", "Lee", "Cho"
        ],
    };

    const taskScreen = new TaskScreen({
        $target: $target,
        initialState: state,
    });



}