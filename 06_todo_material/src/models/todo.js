

class Todo {

    constructor() {
        this.items = []

    }

    add(item) {
        this.items.push(item);
    }

    list() {
        return this.items
    }

    
}

class TodoItem {

    constructor(description) {
        this.description = description;
        this.state = 'todo'
    }

    is_complete() {
        return this.state === 'done'
    }

    is_incomplete() {
        return this.state === 'todo'
    }

    mark_as_complete() {
        this.state = 'done'
    }

    mark_as_incomplete() {
        this.state = 'todo'
    }
}

export {Todo, TodoItem}
