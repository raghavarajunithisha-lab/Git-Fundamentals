// Terminal exercise definitions
const TERMINAL_EXERCISES = {};

TERMINAL_EXERCISES["1.1"] = {
  title: "Explore Git Basics",
  instructions: "Let's verify Git is installed and explore basic commands!",
  steps: [
    {cmd:"git --version", output:"git version 2.44.0", hint:"Check if Git is installed"},
    {cmd:"git help", output:"usage: git [--version] [--help] [-C <path>]...\n\nThese are common Git commands:\n   clone   Clone a repository\n   init    Create an empty repository\n   add     Add file contents to the index\n   commit  Record changes to the repository\n   push    Update remote refs\n   pull    Fetch and integrate with another repository", hint:"See available Git commands"},
    {cmd:"git config --global user.name \"Your Name\"", output:"(configured)", hint:"Set your identity - Git needs this for every commit!"},
    {cmd:"git config --global user.email \"you@example.com\"", output:"(configured)", hint:"Set your email - this appears in commit history"},
  ]
};

TERMINAL_EXERCISES["1.2"] = {
  title: "Create & Clone Repositories",
  instructions: "Practice creating and cloning repositories!",
  steps: [
    {cmd:"mkdir my-project", output:"", hint:"Create a new directory"},
    {cmd:"cd my-project", output:"", hint:"Navigate into it"},
    {cmd:"git init", output:"Initialized empty Git repository in /my-project/.git/", hint:"Initialize a Git repo - creates the .git folder"},
    {cmd:"ls -la .git", output:"total 40\ndrwxr-xr-x  config\ndrwxr-xr-x  HEAD\ndrwxr-xr-x  hooks/\ndrwxr-xr-x  objects/\ndrwxr-xr-x  refs/", hint:"Explore the .git directory Git created"},
    {cmd:"git clone https://github.com/octocat/Hello-World.git", output:"Cloning into 'Hello-World'...\nremote: Enumerating objects: 13, done.\nremote: Total 13 (delta 0), reused 0 (delta 0)\nUnpacking objects: 100% (13/13), done.", hint:"Clone a repo from GitHub - gets ALL history!"},
  ]
};

TERMINAL_EXERCISES["1.3"] = {
  title: "Stage, Commit & Log",
  instructions: "Practice the core Git workflow: add, commit, and read history!",
  steps: [
    {cmd:"echo 'Hello World' > index.html", output:"", hint:"Create a new file"},
    {cmd:"git status", output:"On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include)\n\t\x1b[31mindex.html\x1b[0m", hint:"Check the status - file is untracked (red)"},
    {cmd:"git add index.html", output:"", hint:"Stage the file - it's now in the staging area"},
    {cmd:"git status", output:"On branch main\n\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n\t\x1b[32mnew file: index.html\x1b[0m", hint:"Now it's green - staged and ready to commit!"},
    {cmd:"git commit -m \"feat: add homepage\"", output:"[main (root-commit) a1b2c3d] feat: add homepage\n 1 file changed, 1 insertion(+)\n create mode 100644 index.html", hint:"Commit with a descriptive conventional message"},
    {cmd:"git log --oneline", output:"a1b2c3d (HEAD -> main) feat: add homepage", hint:"View commit history - your first commit!"},
  ]
};

TERMINAL_EXERCISES["1.4"] = {
  title: "Branching Practice",
  instructions: "Create branches, switch between them, and see how they work!",
  steps: [
    {cmd:"git branch", output:"* main", hint:"List branches - * shows your current branch"},
    {cmd:"git switch -c feature/login", output:"Switched to a new branch 'feature/login'", hint:"Create and switch to a new branch"},
    {cmd:"git branch", output:"  main\n* feature/login", hint:"Now you're on feature/login!"},
    {cmd:"echo '<form>Login</form>' > login.html", output:"", hint:"Create a file on this branch"},
    {cmd:"git add . && git commit -m \"feat(auth): add login page\"", output:"[feature/login e4f5g6h] feat(auth): add login page\n 1 file changed, 1 insertion(+)", hint:"Commit on the feature branch"},
    {cmd:"git switch main", output:"Switched to branch 'main'", hint:"Switch back to main"},
    {cmd:"ls", output:"index.html", hint:"Notice: login.html doesn't exist on main! It's only on the feature branch."},
  ]
};

TERMINAL_EXERCISES["1.5"] = {
  title: "Merging Branches",
  instructions: "Merge your feature branch into main!",
  steps: [
    {cmd:"git switch main", output:"Already on 'main'", hint:"Make sure you're on the branch you want to merge INTO"},
    {cmd:"git merge feature/login", output:"Updating a1b2c3d..e4f5g6h\nFast-forward\n login.html | 1 +\n 1 file changed, 1 insertion(+)", hint:"Merge feature/login into main - fast-forward!"},
    {cmd:"ls", output:"index.html  login.html", hint:"Now login.html exists on main too!"},
    {cmd:"git log --oneline --graph --all", output:"* e4f5g6h (HEAD -> main, feature/login) feat(auth): add login page\n* a1b2c3d feat: add homepage", hint:"See the merged history"},
    {cmd:"git branch -d feature/login", output:"Deleted branch feature/login (was e4f5g6h).", hint:"Clean up: delete the merged branch"},
  ]
};

TERMINAL_EXERCISES["1.6"] = {
  title: "Working with Remotes",
  instructions: "Practice push, pull, and fetch operations!",
  steps: [
    {cmd:"git remote -v", output:"origin\thttps://github.com/you/project.git (fetch)\norigin\thttps://github.com/you/project.git (push)", hint:"View configured remotes"},
    {cmd:"git push -u origin main", output:"Enumerating objects: 6, done.\nCounting objects: 100% (6/6), done.\nTo https://github.com/you/project.git\n * [new branch]      main -> main\nBranch 'main' set up to track 'origin/main'.", hint:"Push to remote and set upstream tracking"},
    {cmd:"git fetch origin", output:"remote: Enumerating objects: 3, done.\nFrom https://github.com/you/project.git\n   e4f5g6h..m1n2o3p  main -> origin/main", hint:"Fetch downloads changes WITHOUT applying them"},
    {cmd:"git pull origin main", output:"Updating e4f5g6h..m1n2o3p\nFast-forward\n README.md | 5 +++++\n 1 file changed, 5 insertions(+)", hint:"Pull = fetch + merge in one step"},
  ]
};

