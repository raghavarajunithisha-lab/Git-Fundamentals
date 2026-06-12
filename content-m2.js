CHAPTER_CONTENT["2.1"] = `
<div class="content-block">
<h2>🎬 Pull Requests: The Gateway to Collaboration</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>You wrote a chapter for a book. A PR is you sliding it across the table saying "Hey editor, review this before we publish." The editor (reviewer) can comment, suggest changes, or approve. Only approved chapters make it into the book.</p>
</div>
</div>

<div class="content-block">
<h2>📋 The Comprehensive PR Workflow</h2>
<div class="visual-diagram">
<div class="diagram-title">The Pull Request Lifecycle</div>
<div class="git-flow">
<div class="flow-box flow-working">Create Branch</div>
<div class="flow-arrow">→</div>
<div class="flow-box flow-staging">Push & Open PR</div>
<div class="flow-arrow">→</div>
<div class="flow-box flow-local">CI Checks & Review</div>
<div class="flow-arrow">→</div>
<div class="flow-box flow-remote">Merge to Main</div>
</div>
</div>

<h3>1. Creating the Perfect PR</h3>
<p>A good PR is self-explanatory. When opening a PR, always include:</p>
<ul>
<li><strong>Clear Title:</strong> Use conventional commits if possible (e.g., <code>feat(auth): implement Google OAuth</code>).</li>
<li><strong>Description:</strong> Explain <em>why</em> this change is needed, not just <em>what</em> it does (the code shows what).</li>
<li><strong>Testing Instructions:</strong> Tell the reviewer exactly how to test your changes locally.</li>
<li><strong>Screenshots/Videos:</strong> If it's a UI change, a picture is worth a thousand lines of code.</li>
<li><strong>Linked Issues:</strong> Use keywords like <code>Closes #123</code> to automatically close the associated issue when merged.</li>
</ul>

<h3>2. Draft Pull Requests</h3>
<p>If you're still working but want early feedback or want to run CI (Continuous Integration) tests, open a <strong>Draft PR</strong>. It clearly signals "Do not merge yet!" and prevents accidental merges.</p>

<h3>3. Reviewers and CODEOWNERS</h3>
<p>You can request specific team members to review. Even better, repository admins can add a <code>CODEOWNERS</code> file. This file automatically assigns reviewers based on which files were modified (e.g., modifying <code>/frontend/*</code> auto-requests the <code>@org/frontend-team</code>).</p>
</div>

<div class="content-block">
<h2>🔀 Merge Strategies Deep Dive</h2>
<p>When a PR is approved and CI passes, you have three ways to merge it into the base branch:</p>

<h3>1. Create a Merge Commit (Default)</h3>
<p>Takes all commits from the feature branch and adds them to the base branch, plus one extra "merge commit" that ties them together.</p>
<ul>
<li><strong>Pros:</strong> Preserves the exact history and branch topology.</li>
<li><strong>Cons:</strong> Can lead to a messy, "train track" history if there are many small PRs.</li>
</ul>

<h3>2. Squash and Merge (Industry Standard)</h3>
<p>Takes all commits from the PR, squashes them into a <strong>single new commit</strong>, and adds it to the base branch.</p>
<ul>
<li><strong>Pros:</strong> Keeps the main branch history perfectly linear and clean (1 PR = 1 Commit).</li>
<li><strong>Cons:</strong> You lose the granular, commit-by-commit history of how the feature was developed.</li>
</ul>

<h3>3. Rebase and Merge</h3>
<p>Takes all commits from the PR and re-applies them individually onto the tip of the base branch.</p>
<ul>
<li><strong>Pros:</strong> Linear history without squashing. Granular commits are preserved.</li>
<li><strong>Cons:</strong> Can clutter the main branch if the PR had messy "WIP" commits.</li>
</ul>

<div class="callout best">
<div class="callout-title">✅ PR Best Practices</div>
<p>• Keep PRs small (under 400 lines) - massive PRs are scientifically proven to get worse reviews.<br>
• Set up <strong>Branch Protection Rules</strong> requiring at least 1 approval before merging.<br>
• Enable <strong>Auto-merge</strong> so a PR automatically merges as soon as CI passes and reviews are met.<br>
• Never review your own PR to bypass rules!</p>
</div>
</div>

<div class="content-block">
<button class="exercise-btn quiz-btn" onclick="startQuiz('2.1')">🧠 Test Your Knowledge</button>
</div>
`;

CHAPTER_CONTENT["2.2"] = `
<div class="content-block">
<h2>🎬 Issues: Your Project's Command Center</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>Issues are sticky notes on a team whiteboard. Bug found? Write a sticky. Feature idea? Write a sticky. But unlike sticky notes, these can be searched, assigned, categorized, and linked directly to the code fixing them.</p>
</div>
</div>

<div class="content-block">
<h2>🏷️ Advanced Issue Management</h2>

<h3>1. Issue Templates and Forms</h3>
<p>Instead of letting users type unstructured bug reports, you can force a structure using Issue Forms (YAML files in <code>.github/ISSUE_TEMPLATE/</code>). You can require dropdowns, checkboxes, and specific text fields (e.g., "Browser Version", "Steps to Reproduce").</p>

<h3>2. Organization with Metadata</h3>
<ul>
<li><strong>Labels:</strong> Categorize issues (<code>bug</code>, <code>enhancement</code>, <code>p1-critical</code>). Good for filtering.</li>
<li><strong>Milestones:</strong> Group issues by a specific goal or release date (e.g., <code>v2.0 Beta</code>). You can track the % completion of a milestone as issues are closed.</li>
<li><strong>Assignees:</strong> Clearly designate who is responsible. (Limit to 1-2 people to avoid the bystander effect).</li>
</ul>

<h3>3. The Magic of Linking</h3>
<p>GitHub auto-links things smartly:</p>
<ul>
<li>Mention an issue in a commit: <code>git commit -m "Fix login crash (fixes #42)"</code>. When pushed, the commit appears in the issue's timeline.</li>
<li>When the PR is merged, Issue #42 is automatically closed. Supported keywords: <code>close</code>, <code>closes</code>, <code>closed</code>, <code>fix</code>, <code>fixes</code>, <code>fixed</code>, <code>resolve</code>, <code>resolves</code>, <code>resolved</code>.</li>
</ul>

<div class="callout best">
<div class="callout-title">✅ Best Practices</div>
<p>• Use the <code>good first issue</code> label to highlight easy tasks for new open-source contributors.<br>
• Use the <code>help wanted</code> label when core maintainers don't have time but the feature is approved.<br>
• If an issue goes stale (no activity for months), use an Action to automatically close it to keep the backlog clean.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.3"] = `
<div class="content-block">
<h2>🎬 GitHub Actions: CI/CD & Automation Powerhouse</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>Imagine a team of robots that watches your repo 24/7. When you push code, Robot 1 runs the tests. If they pass, Robot 2 builds the app. Then Robot 3 deploys it to your server. That's GitHub Actions. It entirely eliminates "it works on my machine" syndrome.</p>
</div>
</div>

<div class="content-block">
<h2>⚙️ Anatomy of an Action</h2>
<p>GitHub Actions are defined using YAML files stored in the <code>.github/workflows/</code> directory. Let's break down the hierarchy:</p>

<ul>
<li><strong>Workflow:</strong> The entire automated process (e.g., "Deploy to Production").</li>
<li><strong>Events (on):</strong> The triggers. When does this run? (On <code>push</code>, on <code>pull_request</code>, on a cron <code>schedule</code>, or manually via <code>workflow_dispatch</code>).</li>
<li><strong>Jobs:</strong> A set of steps that execute on the same runner (virtual machine). Jobs run in <em>parallel</em> by default unless you use <code>needs</code> to make them sequential.</li>
<li><strong>Steps:</strong> Individual tasks. A step can either run a shell command (<code>run: npm test</code>) or use a pre-built Action (<code>uses: actions/checkout@v4</code>).</li>
<li><strong>Runners:</strong> The server running your code. GitHub provides Ubuntu, Windows, and macOS runners, or you can host your own (Self-hosted runners).</li>
</ul>

<div class="code-block">
<div class="code-block-header"><span>.github/workflows/main.yml</span></div>
<pre>name: Node.js CI/CD

# 1. THE TRIGGER
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch: # Allows manual triggering from the UI

# 2. THE JOBS
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    # MATRIX: Run this job multiple times with different variables
    strategy:
      matrix:
        node-version: [18.x, 20.x]
        
    steps:
      # Step 1: Clone the code
      - name: Checkout code
        uses: actions/checkout@v4
        
      # Step 2: Setup Node environment
      - name: Use Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm' # Automagically caches node_modules!
          
      # Step 3: Run commands
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
  deploy:
    # Make deploy wait for build-and-test to finish successfully
    needs: build-and-test
    # Only deploy if it's a push to main (not a PR)
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    # Define an environment for protection rules and specific secrets
    environment: production
    
    steps:
      - name: Deploy to Server
        run: echo "Deploying..."
        env:
          API_KEY: \${{ secrets.PROD_API_KEY }}</pre>
</div>
</div>

<div class="content-block">
<h2>🔥 Advanced Features You Must Know</h2>

<h3>1. Matrix Builds</h3>
<p>Need to test your Python library on Python 3.9, 3.10, and 3.11, across Windows, Ubuntu, and macOS? Use a matrix strategy. GitHub will spin up 9 parallel runners testing every combination automatically.</p>

<h3>2. Caching Dependencies</h3>
<p>Downloading <code>node_modules</code> or Maven packages every run is slow. Use <code>actions/cache</code> or the built-in caching in setup actions (like <code>setup-node</code>) to store dependencies between runs, cutting execution time in half.</p>

<h3>3. Secrets and Variables</h3>
<p><strong>NEVER</strong> hardcode API keys or passwords in your repo. Store them in Repo Settings → Secrets. Access them in workflows via <code>\${{ secrets.MY_KEY }}</code>. They are heavily encrypted and redacted from logs.</p>

<h3>4. Environments & Approvals</h3>
<p>For deployment jobs, define an <code>environment: production</code>. In Repo Settings, you can configure the "production" environment to require manual human approval before the job executes.</p>

<h3>5. Reusable Workflows & Composite Actions</h3>
<p>Don't copy-paste YAML across 50 microservices. Create a Reusable Workflow in a central repo, and have all other repos call it with <code>uses: my-org/central-repo/.github/workflows/ci.yml@main</code>.</p>

<div class="callout best">
<div class="callout-title">✅ Pro Tips</div>
<p>• <strong>Concurrency:</strong> Set up concurrency groups to automatically cancel older workflow runs if a developer pushes new code quickly. Saves massive compute minutes!<br>
• <strong>Artifacts:</strong> Use <code>actions/upload-artifact</code> to save compiled binaries or test coverage reports from a job so you can download them later.<br>
• Pin 3rd party actions to a specific commit SHA (e.g., <code>@a1b2c3d</code>) rather than a tag (<code>@v2</code>) to prevent supply chain attacks.</p>
</div>

<h3>🧠 Senior DevOps Deep Dive</h3>
<p>To truly master GitHub Actions at an enterprise scale, you must understand these advanced concepts:</p>
<ul>
<li><strong>OIDC (OpenID Connect):</strong> Storing long-lived AWS/Azure access keys in GitHub Secrets is dangerous. OIDC allows GitHub to dynamically request a short-lived token directly from your cloud provider using a trust relationship. No static secrets required!</li>
<li><strong>Job Outputs:</strong> Jobs run on separate machines. To pass data between them, you must use outputs. In job A, run <code>echo "my_var=123" >> $GITHUB_OUTPUT</code>. In job B, read it using <code>\${{ needs.jobA.outputs.my_var }}</code>.</li>
<li><strong>The GITHUB_TOKEN Permissions:</strong> By default, the built-in token has broad permissions. Follow the principle of least privilege by adding a <code>permissions:</code> block to your workflow, restricting it to <em>exactly</em> what it needs (e.g., <code>issues: write</code>, <code>pull-requests: read</code>).</li>
<li><strong>Self-Hosted Runners:</strong> For highly secure environments, you install the GitHub Runner agent on your own internal servers. <strong>WARNING:</strong> Never use self-hosted runners on public repositories, as malicious pull requests can execute arbitrary code on your internal corporate network!</li>
</ul>

</div>
`;

CHAPTER_CONTENT["2.4"] = `
<div class="content-block">
<h2>🎬 GitHub Pages: Free Website Hosting</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>GitHub Pages turns a folder of code in your repo into a live, public website instantly. It's like having a free web server that automatically updates whenever you push code.</p>
</div>
</div>

<div class="content-block">
<h2>🚀 How It Works</h2>
<p>GitHub Pages only hosts <strong>static content</strong> (HTML, CSS, JS, images). It cannot run backend code like Node.js, Python, or PHP databases. It is perfect for:</p>
<ul>
<li>Personal portfolios and resumes</li>
<li>Project documentation</li>
<li>Static site generators (React/Next.js export, Jekyll, Hugo, Astro)</li>
</ul>

<h3>Two Ways to Deploy</h3>
<ol>
<li><strong>Deploy from Branch:</strong> The classic way. Tell GitHub to look at the <code>main</code> branch or <code>gh-pages</code> branch, specifically the root or a <code>/docs</code> folder, and serve it.</li>
<li><strong>Deploy with GitHub Actions (Modern):</strong> The recommended way. You write an Action that builds your site (e.g., <code>npm run build</code>) and uploads the result to GitHub Pages. This allows you to use any modern framework without committing the compiled <code>dist/</code> folder to your repo.</li>
</ol>

<div class="callout best">
<div class="callout-title">✅ Custom Domains & HTTPS</div>
<p>By default, your site is at <code>username.github.io/repo-name</code>. You can easily add a custom domain (e.g., <code>myproject.com</code>) in the settings. GitHub will automatically provision and renew a free Let's Encrypt SSL/TLS certificate for you, ensuring your site is served securely over HTTPS.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.5"] = `
<div class="content-block">
<h2>🎬 Forks: The Open Source Engine</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>You find a public park (repository) with a great playground, but it's missing a swing set. You can't just build one there because you don't own the park. Instead, you magically clone the entire park into your own backyard (Fork), build the swing set there, and then invite the original park owner to look at it and maybe copy your swing set back to their park (Pull Request).</p>
</div>
</div>

<div class="content-block">
<h2>🔄 The Deep Fork Workflow</h2>
<p>When contributing to open source, you rarely have Write access to the repository. Forking is required.</p>

<h3>1. Forking and Cloning</h3>
<p>Click "Fork" in the UI. This creates a 1-to-1 copy of the repo under your account. Then clone YOUR fork locally:</p>
<div class="code-block">
<pre><span class="cmd">$ git clone git@github.com:YOUR_NAME/project.git</span></pre>
</div>

<h3>2. The "Upstream" Remote</h3>
<p>Your local repo now knows about your fork (called <code>origin</code>). But it needs to know about the original repository so you can pull in new updates made by others. We call the original repo <code>upstream</code>.</p>
<div class="code-block">
<pre><span class="comment"># Add the original repo as a remote named 'upstream'</span>
<span class="cmd">$ git remote add upstream https://github.com/ORIGINAL_AUTHOR/project.git</span>

<span class="comment"># Verify you have both origin and upstream</span>
<span class="cmd">$ git remote -v</span></pre>
</div>

<h3>3. Keeping Your Fork Synced</h3>
<p>Before you start working, make sure your fork is up-to-date with the original project:</p>
<div class="code-block">
<pre><span class="cmd">$ git fetch upstream</span>
<span class="cmd">$ git checkout main</span>
<span class="cmd">$ git merge upstream/main</span>
<span class="cmd">$ git push origin main</span></pre>
</div>
<p><em>(Note: GitHub UI now has a convenient "Sync Fork" button that does this with one click!)</em></p>

<h3>4. Working and Submitting</h3>
<p>Create a branch, make your changes, commit, and push to YOUR fork. Then, go to the original repository on GitHub, and you'll see a prompt to open a Pull Request across forks.</p>

<div class="callout tip">
<div class="callout-title">⚡ Allow Edits from Maintainers</div>
<p>When opening a PR from a fork, leave the checkbox "Allow edits from maintainers" checked. This allows the core maintainers of the open-source project to make small tweaks to your branch directly to get it merged faster, rather than going back and forth asking you to fix typos.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.6"] = `
<div class="content-block">
<h2>🎬 Discussions: Community Forums</h2>
<p>While Issues are for actionable work (bugs, tasks), <strong>Discussions</strong> are for conversation. They turn your repository into a StackOverflow-style forum or community board.</p>

<h3>Features of Discussions</h3>
<ul>
<li><strong>Categories:</strong> Separate conversations into Q&A, Announcements, Ideas, and General.</li>
<li><strong>Q&A Format:</strong> In the Q&A category, answers can be upvoted, and the author can mark the best reply as the "Accepted Answer" (just like StackOverflow).</li>
<li><strong>Polls:</strong> Ask the community to vote on the next feature to build.</li>
<li><strong>Conversion:</strong> If a discussion ("Idea: Add Dark Mode") turns into actual work, maintainers can click "Create Issue from Discussion" with one click.</li>
</ul>

<div class="callout best">
<div class="callout-title">✅ Why use Discussions?</div>
<p>It keeps your Issue tracker clean. Without Discussions, users will open Issues just to ask "How do I install this on Windows?" - which clogs up the backlog. Direct support questions to Discussions.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.7"] = `
<div class="content-block">
<h2>🎬 GitHub Projects: Jira/Trello Inside GitHub</h2>
<p>Projects (V2) is a deeply integrated, highly customizable project management tool. Because it lives next to your code, it has "magic" that standalone tools like Trello don't.</p>

<h3>Core Concepts</h3>
<ul>
<li><strong>Items:</strong> A Project is filled with items. An item can be an Issue, a Pull Request, or just a Draft text note.</li>
<li><strong>Custom Fields:</strong> You can add columns of data. Create a Single Select field for "Status" (Todo, In Progress, Blocked), a Number field for "Story Points", or a Date field for "Target Release".</li>
</ul>

<h3>Powerful Views</h3>
<p>You can visualize the exact same data in three different ways:</p>
<ol>
<li><strong>Board View (Kanban):</strong> Drag and drop cards across columns (e.g., from "In Progress" to "In Review"). Great for daily standups.</li>
<li><strong>Table View:</strong> A dense, Excel-like spreadsheet view. Great for sprint planning, bulk-editing fields, and filtering.</li>
<li><strong>Roadmap View:</strong> A Gantt chart based on date fields. Great for high-level planning and visualizing dependencies.</li>
</ol>

<div class="callout best">
<div class="callout-title">✅ Built-in Automation</div>
<p>Projects can automatically update. You can configure a workflow so that when a Pull Request is merged, its associated Issue automatically moves from the "In Progress" column to the "Done" column. No manual dragging required!</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.8"] = `
<div class="content-block">
<h2>🎬 Releases & Tags: Shipping Software</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>A Git Tag is just a sticker on a commit saying "v1.0". A GitHub Release takes that sticker, puts it in a nice box, prints out a manual (Release Notes), and includes the finished product (Compiled Binaries) for users to download.</p>
</div>
</div>

<div class="content-block">
<h2>📦 Managing Releases</h2>
<p>Releases are intended for end-users or consumers of your package.</p>

<h3>1. Semantic Versioning (SemVer)</h3>
<p>Always tag releases using SemVer: <code>vMAJOR.MINOR.PATCH</code> (e.g., <code>v2.1.4</code>).</p>
<ul>
<li><strong>MAJOR:</strong> Breaking changes. Code that worked in v1 will crash in v2.</li>
<li><strong>MINOR:</strong> New features added, but fully backward compatible.</li>
<li><strong>PATCH:</strong> Bug fixes only. No new features.</li>
</ul>

<h3>2. Auto-generated Release Notes</h3>
<p>GitHub can automatically generate release notes by looking at all the Pull Requests merged since the last release. It categorizes them (e.g., Features, Bug Fixes) based on labels, and lists the contributors.</p>

<h3>3. Release Assets</h3>
<p>While the source code is automatically provided as a ZIP, you should upload compiled assets. If you built a desktop app, upload the <code>.exe</code> and <code>.dmg</code> files. You can automate this entirely using GitHub Actions!</p>
</div>
`;

CHAPTER_CONTENT["2.9"] = `
<div class="content-block">
<h2>🎬 Wiki: The Project Encyclopedia</h2>
<p>Every repository comes with a Wiki. It's a place to store long-form documentation that doesn't belong in the README (which should be short and punchy).</p>

<div class="callout tip">
<div class="callout-title">⚡ The Hidden Secret of Wikis</div>
<p>A GitHub Wiki is actually a <strong>separate Git repository</strong> hidden behind the scenes! You can clone it to your local machine, edit the markdown files in VS Code, and push changes back.</p>
<div class="code-block">
<pre><span class="cmd">$ git clone https://github.com/YOUR_NAME/project.wiki.git</span></pre>
</div>
</div>

<div class="callout why">
<div class="callout-title">💡 Wiki vs GitHub Pages</div>
<p>Use the Wiki for internal team documentation, onboarding guides, and architecture notes. It's easy but has limited styling.<br>
Use GitHub Pages for public-facing user documentation, API references, and product sites where you need a beautiful, branded design.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.10"] = `
<div class="content-block">
<h2>🎬 Gists: Code Snippets on the Fly</h2>
<p>Gists are a way to share code snippets without creating a full repository. They are essentially mini-repos.</p>

<h3>Types of Gists</h3>
<ul>
<li><strong>Public Gists:</strong> Searchable, show up on your profile, great for sharing a cool algorithm or config file.</li>
<li><strong>Secret Gists:</strong> Not searchable, hidden from your profile. <strong>WARNING:</strong> They are NOT private! Anyone with the URL can see them. Do not put passwords in a secret gist.</li>
</ul>

<div class="callout best">
<div class="callout-title">✅ Pro Tips</div>
<p>• Every gist is a Git repo! You can clone it, commit to it locally, and push.<br>
• Gists have an "Embed" script. You can embed a gist directly into a Medium article or personal blog, and it will render with beautiful syntax highlighting.</p>
</div>
</div>
`;

CHAPTER_CONTENT["2.11"] = `
<div class="content-block">
<h2>🎬 Code Review: The Art of Feedback</h2>
<div class="callout story">
<div class="callout-title">📖 Think of it like...</div>
<p>Code review isn't just about finding bugs. It's a knowledge transfer mechanism. It's how the junior learns from the senior, and how the senior discovers a new API the junior used. It's a conversation, not an exam.</p>
</div>
</div>

<div class="content-block">
<h2>📋 The Code Review Masterclass</h2>

<h3>1. How to Submit Code for Review</h3>
<ul>
<li><strong>Keep it small:</strong> A 100-line PR gets a thorough review. A 1000-line PR gets a "Looks good to me" because the reviewer is exhausted.</li>
<li><strong>Review your own code first:</strong> Look at your own diff before assigning a reviewer. Catch your own console.logs and typos.</li>
</ul>

<h3>2. How to Review Code (The Reviewer's Guide)</h3>
<ul>
<li><strong>Understand the Goal:</strong> Read the Issue and PR description first. What problem is this solving?</li>
<li><strong>Architecture First:</strong> Look at the overall design before nitpicking variable names. If the architecture is wrong, the variable names don't matter.</li>
<li><strong>Use the "Suggested Changes" Feature:</strong> Don't just say "Fix this typo." Click the <code>+/-</code> button in the GitHub UI to propose the exact code fix. The author can commit your suggestion with one click.</li>
</ul>

<h3>3. Communication Etiquette</h3>
<div class="callout best">
<div class="callout-title">✅ Communication Rules</div>
<p>• <strong>Ask questions, don't give orders:</strong> Instead of "Change this to a map", say "What do you think about using a map here for better performance?"<br>
• <strong>Prefix your comments:</strong><br>
&nbsp;&nbsp;<code>nit:</code> - A minor point (naming, styling) that shouldn't block merging.<br>
&nbsp;&nbsp;<code>question:</code> - I don't understand this, please explain.<br>
&nbsp;&nbsp;<code>blocker:</code> - This will break production, must fix.<br>
• <strong>Praise good code:</strong> Code review shouldn't only be negative. Leave a comment saying "Wow, this is a really elegant solution!" It builds immense team morale.</p>
</div>

</div>

<div class="content-block">
<button class="exercise-btn quiz-btn" onclick="startQuiz('2.11')">🧠 Test Your Knowledge</button>
</div>
`;

