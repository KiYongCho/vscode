// todo3.ts
// 원격서버의 JSON 사용

interface Todo3 {
    id: number;
    title: string;
    completed: boolean;
}

let todos3: Todo3[] = [];

async function fetchJson(): Promise<Todo3[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Error : ' + response.statusText);
    } else {
        return await response.json();
    }
}

fetchJson()
.then(async function(response) {
    todos3 = await response;
    todos3 = todos3.map(todo3 => 
        todo3 = {'id': todo3.id, 'title': todo3.title, 'completed': todo3.completed}
    ).splice(0, 5);
})
.then(() => {
    // 목록
    console.log(getTodos3());
    // 등록
    registTodo3({'id': 6, 'title': 'title6', 'completed': false});
    console.log(getTodos3());
    // 조회
    console.log(getTodo3(6));
    // 수정
    updateTodo3({'id': 6, 'title': 'up_title6', 'completed': false});
    console.log(getTodos3());
    // 삭제
    deleteTodo3(6);
    console.log(getTodos3());    
});

// 목록
function getTodos3(): Todo3[] {
    return todos3;
}

// 등록
function registTodo3(paramTodo: Todo3): void {
    if (!isExistedTodo3(paramTodo.id)) {
        todos3.push(paramTodo);
    }
}

// 조회
function getTodo3(paramId: number): Todo3 {
    return (todos3.filter(todo3 => todo3.id===paramId))[0];
}

// 수정
function updateTodo3(paramTodo: Todo3): Todo3[] {
    const id = paramTodo.id;
    if (isExistedTodo3(id)) {
        return todos3 = [...deleteTodo3(id), paramTodo];
    } else {
        return todos3;
    }
}

// 삭제
function deleteTodo3(paramId: number): Todo3[] {
    if (isExistedTodo3(paramId)) {
        return todos3 = todos3.filter(todo3 => todo3.id!=paramId);
    } else {
        return todos3;
    }
}

// id 존재여부 확인
function isExistedTodo3(paramId: number): boolean {
    return todos3.some(todo3 => todo3.id===paramId);
}
















