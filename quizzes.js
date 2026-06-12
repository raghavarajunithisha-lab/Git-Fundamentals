// Quiz data for all chapters
const QUIZZES = {};

QUIZZES["1.1"] = [
  {q:"What type of version control is Git?",opts:["Local","Centralized","Distributed","Cloud-based"],ans:2,
   exp:"Git is distributed - every clone has the complete repository history. No single point of failure!"},
  {q:"What are Git's three states?",opts:["Create, Read, Delete","Local, Remote, Cloud","Working Directory, Staging Area, Repository","Draft, Review, Published"],ans:2,
   exp:"Files flow: Working Directory → (git add) → Staging Area → (git commit) → Repository. The staging area is what makes Git unique!"},
  {q:"Why is the staging area useful?",opts:["It makes Git slower","It lets you craft specific commits from selected changes","It's required by GitHub","It automatically backs up files"],ans:1,
   exp:"The staging area lets you pick exactly which changes go into each commit, enabling clean, logical commits even when you've made many changes."},
];

QUIZZES["1.2"] = [
  {q:"What does 'git init' create?",opts:["A GitHub repository","A .git hidden folder","A remote connection","A new branch"],ans:1,
   exp:"git init creates a hidden .git/ directory inside your folder. This is the 'memory bank' that turns a normal folder into a smart folder with Git superpowers."},
  {q:"What's the advantage of SSH over HTTPS for Git?",opts:["It's faster","No password prompts after setup","It's more secure","All of the above"],ans:3,
   exp:"SSH uses key-based auth (no passwords), is encrypted, and faster for frequent operations. Set it up once and forget about authentication!"},
  {q:"What does '--depth 1' do in git clone?",opts:["Clones only 1 branch","Clones only the latest commit (shallow clone)","Clones 1 file","Limits clone speed"],ans:1,
   exp:"Shallow clone downloads only the latest snapshot, not full history. Perfect for large repos you just need to read, build, or run."},
];

QUIZZES["1.3"] = [
  {q:"What should you ALWAYS do before 'git add .'?",opts:["git push","git status","git commit","git pull"],ans:1,
   exp:"Always run 'git status' first to see exactly what you're about to stage. Blind 'git add .' can include unwanted files!"},
  {q:"Which commit message is best?",opts:["fixed stuff","update","fix(cart): prevent duplicate items on rapid click","changes"],ans:2,
   exp:"Conventional commits format (type(scope): description) tells exactly what changed and where. Future you will thank present you!"},
  {q:"What does 'git add -p' do?",opts:["Adds all files in parallel","Stages specific hunks interactively","Pushes changes","Previews changes"],ans:1,
   exp:"'git add -p' lets you stage individual chunks (hunks) of a file. This is how senior developers create precise, logical commits."},
  {q:"What does 'git commit --amend' do?",opts:["Creates a new commit","Modifies the last commit","Reverts all commits","Deletes staged files"],ans:1,
   exp:"--amend lets you fix the last commit: change its message or add forgotten files. Only use on unpushed commits!"},
];

QUIZZES["1.4"] = [
  {q:"What is a Git branch technically?",opts:["A copy of the entire codebase","A lightweight pointer to a commit","A separate folder","A GitHub feature"],ans:1,
   exp:"A branch is just a ~41 byte file containing a commit hash. That's why creating branches is instant in Git!"},
  {q:"Which command creates AND switches to a new branch?",opts:["git branch new-feature","git checkout new-feature","git switch -c new-feature","git merge new-feature"],ans:2,
   exp:"'git switch -c' (or 'git checkout -b') creates a new branch and switches to it in one step. 'switch -c' is the modern preferred way."},
  {q:"Which branch name follows best practices?",opts:["myBranch","FEATURE_LOGIN","feature/user-auth","f1"],ans:2,
   exp:"Use lowercase, hyphens, and a category prefix: feature/, bugfix/, hotfix/. Descriptive names help the whole team understand what's being worked on."},
];

QUIZZES["1.5"] = [
  {q:"When does a fast-forward merge happen?",opts:["Always","When there are conflicts","When the target branch has no new commits since branching","When you use --no-ff"],ans:2,
   exp:"Fast-forward happens when the target branch hasn't diverged - Git just moves the pointer forward. No merge commit needed!"},
  {q:"What creates a merge conflict?",opts:["Creating a branch","Two branches changing the same line","Pushing to remote","Using git status"],ans:1,
   exp:"Conflicts occur when two branches modify the same line in the same file. Git can't decide which version to keep, so it asks you."},
  {q:"After resolving a conflict, what do you do?",opts:["git push","git add the file, then git commit","git branch -d","git stash"],ans:1,
   exp:"After editing the conflicted file and removing markers, you 'git add' the resolved file and 'git commit' to complete the merge."},
];

QUIZZES["1.6"] = [
  {q:"What is 'origin' in Git?",opts:["The first commit","A nickname for the remote repository","The main branch","The original author"],ans:1,
   exp:"'origin' is just a conventional nickname for your default remote. You could rename it to anything!"},
  {q:"What's the difference between fetch and pull?",opts:["They're the same","fetch downloads but doesn't merge; pull does both","fetch is faster","pull downloads; fetch merges"],ans:1,
   exp:"'git fetch' safely downloads remote changes without touching your code. 'git pull' = fetch + merge. Many pros prefer fetch first to inspect changes."},
  {q:"Why should you NEVER use 'git push --force' on shared branches?",opts:["It's slow","It overwrites remote history and breaks others' repos","It creates conflicts","It deletes branches"],ans:1,
   exp:"Force push rewrites remote history. If teammates based work on those commits, their repos break. Use --force-with-lease instead (it fails if someone else pushed)."},
];

QUIZZES["1.7"] = [
  {q:"What is the Golden Rule of Rebase?",opts:["Always rebase before merge","Never rebase pushed/shared commits","Rebase daily","Only rebase main branch"],ans:1,
   exp:"Rebasing rewrites commit hashes. If others have based work on those commits, their history breaks. Only rebase YOUR LOCAL, unpushed commits."},
  {q:"What does 'git rebase -i' let you do?",opts:["Rebase interactively: squash, reorder, edit commits","Rebase in increments","Initialize a rebase","Ignore conflicts"],ans:0,
   exp:"Interactive rebase is a power tool: squash messy WIP commits, reword messages, reorder, or drop commits entirely before sharing."},
];

QUIZZES["1.8"] = [
  {q:"When should you use git stash?",opts:["To permanently save work","To temporarily shelve work-in-progress to switch context","To delete changes","To push to remote"],ans:1,
   exp:"Stash is for temporary storage - like putting your work in a drawer while you handle something urgent. Always name your stashes!"},
  {q:"What's the difference between stash apply and stash pop?",opts:["No difference","apply keeps the stash; pop removes it from the list","apply is faster","pop keeps the stash"],ans:1,
   exp:"'pop' applies AND removes the stash from the list. 'apply' applies but keeps it in the list. Use pop to keep your stash list clean."},
];

QUIZZES["1.9"] = [
  {q:"What's the difference between lightweight and annotated tags?",opts:["No difference","Annotated stores metadata (author, date, message); lightweight is just a pointer","Lightweight is for releases","Annotated is for branches"],ans:1,
   exp:"Always use annotated tags (-a) for releases - they create a proper Git object with author, date, and message. Lightweight tags are just pointers."},
];

QUIZZES["1.10"] = [
  {q:"If you add a file to .gitignore AFTER it's been committed, what happens?",opts:["It's automatically removed","Nothing - it's still tracked until you run git rm --cached","Git deletes the file","The commit is undone"],ans:1,
   exp:".gitignore only affects untracked files. Already-committed files must be explicitly untracked with 'git rm --cached filename'."},
  {q:"Which should NEVER be committed?",opts:["README.md",".env files with API keys","package.json","LICENSE"],ans:1,
   exp:"Environment files with secrets (API keys, passwords, tokens) must NEVER be committed. Use .gitignore and .env.example instead."},
];


QUIZZES["2.1"] = [
  {q:"What merge strategy do most teams use for PRs?",opts:["Merge commit","Squash and merge","Rebase and merge","Fast-forward"],ans:1,
   exp:"Squash and merge combines all PR commits into one clean commit on main. One PR = one commit = readable history."},
  {q:"What is a Draft PR for?",opts:["Merging quickly","Early feedback and CI checks on work-in-progress","Hiding code","Skipping review"],ans:1,
   exp:"Draft PRs signal 'not ready to merge' but let you get early CI results and feedback. Convert to ready when done."},
];

QUIZZES["2.2"] = [
  {q:"How do you auto-close an issue when a PR is merged?",opts:["Delete the issue manually","Write 'Closes #42' in the PR description","Tag the issue as done","Use git close command"],ans:1,
   exp:"Keywords like 'Closes', 'Fixes', 'Resolves' followed by #issue-number in PR descriptions auto-close the issue on merge."},
];

QUIZZES["2.3"] = [
  {q:"Where do GitHub Actions workflow files live?",opts:["In the root directory","In .github/workflows/","In package.json","On GitHub's servers only"],ans:1,
   exp:"Workflows are YAML files stored in .github/workflows/ - they're version controlled with your code!"},
  {q:"What is CI in GitHub Actions?",opts:["Code Integration","Continuous Integration - automatically test every code change","Commit Inspection","Cloud Infrastructure"],ans:1,
   exp:"CI automatically runs tests on every push/PR to catch bugs early. It's the safety net that prevents broken code from reaching production."},
];

QUIZZES["2.4"] = [
  {q:"What type of sites can GitHub Pages host?",opts:["Dynamic server apps","Static sites (HTML/CSS/JS)","Databases","Backend APIs"],ans:1,
   exp:"GitHub Pages hosts static sites only. For dynamic apps, you'd need Heroku, Vercel, or similar. But static is perfect for docs, portfolios, and blogs!"},
];

QUIZZES["2.5"] = [
  {q:"What's the difference between fork and clone?",opts:["No difference","Fork copies to your GitHub account; clone copies to your local machine","Fork is for branches; clone is for repos","Fork deletes the original"],ans:1,
   exp:"Fork = server-side copy on GitHub (for contributing to others' repos). Clone = local copy on your machine (for any repo)."},
];

QUIZZES["2.11"] = [
  {q:"What should you prefix a minor, non-blocking review comment with?",opts:["URGENT:","nit:","TODO:","FIX:"],ans:1,
   exp:"'nit:' signals a minor suggestion (naming, style) that shouldn't block the PR. It helps authors prioritize what to address."},
];

