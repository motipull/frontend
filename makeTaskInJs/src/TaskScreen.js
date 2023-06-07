
export default function TaskScreen({ $target, initialState }) {

    const $taskScreen = document.createElement('div');

    this.state = initialState;

    $target.appendChild($taskScreen);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        const { tasks } = this.state;
        $taskScreen.innerHTML = `
            <ul>
                ${tasks.map(({ id, name, description, admins, classifications, isDetailWorks, detailWorks, cheerUp }) => `
                    <li data-id="${id}" class="taskItem">
                        <h3 class="taskTitle">${name}</h3>
                        <p class="taskContent">${description}</p>
                        <ul class="adminWrapper">
                            ${admins.map((admin) => `
                                <li class="admin">${admin}</li>
                            `).join('')}
                        </ul>
                        <ul class="classificationWrapper">
                            ${classifications.map((classification) => `
                                <li class="classification">${classification}</li>
                            `).join('')}
                        </ul>
                        ${isDetailWorks ? `
                            <div class="detailWorksPercent">세부 Works 
                            <b>${Math.floor(((detailWorks.filter(({ isComplete }) => { return isComplete }).length) / detailWorks.length) * 100)}%</b>
                            진행</div>
                            <div class="detailWorksSentence">시작이 반! 하나부터 시작해보아요!</div>
                        ` : ``}
                        <button class="cheerUp">응원</button>
                        <div class="detailWorksSentence">${cheerUp}명이 응원합니다!</div>
                    </li>
                `).join('')}
            </ul>
        `;
    }
    $taskScreen.addEventListener('click', (e) => {
        const $li = e.target.closest('li')
        if (e.target.className === "cheerUp") {
            const cheerUpId = $li.dataset.id;
            const nextTasks = this.state.tasks;
            for (let i = 0; i < nextTasks.length; i++) {
                if (nextTasks[i].id == cheerUpId) {
                    nextTasks[i].cheerUp++;
                }
            }
            this.setState({
                ...this.state,
                tasks: nextTasks
            })
        }
    })


    this.render();
}