interface Repository {
    name: string;
    author: string;
    createdAt: number;
}

const showRepository = (repository: Repository): string => {
    return `Repository ${repository.name} developed by ${repository.author} in ${repository.createdAt}`;
};

const info: string = showRepository({
    name: "Curso TypeScript",
    author: "Ronald Almeida",
    createdAt: 2023,
});

console.log(info); // Repository Curso TypeScript developed by Ronald Almeida in 2023
