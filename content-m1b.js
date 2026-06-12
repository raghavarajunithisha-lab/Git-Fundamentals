CHAPTER_CONTENT["1.6"] = `
<div class="content-block">
<h2>🎬 Merging & Conflicts (Bringing Universes Together)</h2>
<p>At the end of Chapter 1.5, you successfully created a new branch named <code>feature/math-functions</code>, added the <code>add</code> function to <code>calculator.py</code>, and pushed it to GitHub. Now, how do we bring that code back into the main castle (the <code>main</code> branch)?</p>

<div class="callout story">
<div class="callout-title">📖 The Poster Project Analogy</div>
<p>Imagine you and a classmate are working together on a science poster. You are coloring the title on a copy of the poster on your desk, while your partner is writing details on another copy. **Merging** is the process of putting both of your changes together onto the final poster board!</p>
</div>

<p>If you open <code>calculator.py</code> right now and run <code>git switch feature/math-functions</code>, you will see your new addition code. But if you switch back to main (<code>git switch main</code>), the addition code disappears! Merging makes sure both branches share the new code safely.</p>
</div>

<div class="callout best">
<div class="callout-title">⚠️ Important: You Must Follow Both Paths!</div>
<p>In this chapter, you will learn how to merge in two different ways. You <strong>must follow both Path 1 and Path 2</strong> step-by-step:
<ul>
  <li>First, complete <strong>Path 1</strong> (The GitHub Web UI Way) to cleanly merge your branch.</li>
  <li>Then, complete <strong>Path 2</strong> (The Terminal Way) to learn how to trigger and resolve a merge conflict when two updates crash.</li>
</ul>
</p>
</div>

<div class="content-block">
<h2>🌐 Path 1: The UI Way (A Clean Merge)</h2>
<p>In professional teams, developers almost <strong>never</strong> merge code directly on their computers. Merging directly on your machine bypasses code review and testing. Instead, teams use GitHub's website via <strong>Pull Requests (PRs)</strong>. Let's do that now!</p>

<h3>1. Open a Pull Request</h3>
<ol>
<li>Go to your repository on GitHub.</li>
<li>You should see a yellow bar at the top with a green button that says <strong>"Compare & pull request"</strong>. Click it! (If you don't see it, go to the "Pull requests" tab and click "New pull request").</li>
<li>Write a description of the math functions you added and click <strong>"Create pull request"</strong>.</li>
</ol>
<img src="assets/PullRequest.jpeg" alt="GitHub Compare and Pull Request button" style="max-width: 100%; border-radius: 8px; margin-top: 10px; margin-bottom: 20px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

<h3>2. Merge via GitHub</h3>
<p>On this page, your friends would normally read your code changes and leave comments. Since your work is solid, click the green <strong>"Merge pull request"</strong> button, then click <strong>"Confirm merge"</strong>.</p>
<p>🎉 Awesome! Your code is merged in the cloud. The <code>main</code> branch on GitHub now contains your <code>add</code> function!</p>
<img src="assets/MergePR.jpeg" alt="GitHub Merge Pull Request button" style="max-width: 100%; border-radius: 8px; margin-top: 10px; margin-bottom: 20px; border: 1px solid #ddd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

<div class="callout danger">
<div class="callout-title">⚠️ The Cloud vs. Local Sync Trap!</div>
<p>We have a small problem! While GitHub's <code>main</code> branch has your new addition function, the <strong>main branch on your computer is still stuck in the past</strong>. It has no idea the merge happened. Let's sync the cloud back down to your computer!</p>
</div>

<h3>3. Pull the updates</h3>
<p>Open your terminal, switch to your local <code>main</code> branch, and download the merged changes:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch main</span>
<span class="cmd">$ git pull</span></pre>
</div>

<div class="callout story">
<div class="callout-title">💡 Push vs. Pull: The Golden Rule</div>
<p>Remember: <strong>Your local computer and GitHub do not automatically sync with each other!</strong></p>
<ul>
  <li><strong><code>git pull</code></strong>: Downloads all updates from GitHub to your computer.</li>
  <li><strong><code>git push</code></strong>: Uploads all updates from your computer to GitHub.</li>
</ul>
<p><strong>✅ Golden Best Practice:</strong> Every morning when you sit down to code with a team, the very first command you should run is <code>git pull</code>! This grabs all of your friends' latest updates and stops merge issues before they start.</p>
</div>
</div>

<div class="content-block">
<h3>Visualizing Your Branches</h3>
<p><strong>Before merging:</strong> The <code>main</code> branch is behind, while the feature branch has the addition commit:</p>
<img src="assets/new_branch.jpeg" alt="New Branch Visualized" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px; margin-bottom: 20px;">

<p><strong>After merging:</strong> Both branches meet back up, and `main` catches up to the latest changes:</p>
<img src="assets/first_merge.png" alt="After First Merge" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px; margin-bottom: 20px;">

<h3>How Git Combines Code (And Why It Fails)</h3>
<p>When you merge branches, Git checks what changed. There are three possibilities:</p>
<ul>
<li><strong>1. The "Fast-Forward" Merge (No Work conflicts!):</strong> If nobody has made any changes to the <code>main</code> branch since you created your branch, Git simply slides the <code>main</code> branch pointer forward to match your branch. Easy peasy!</li>
<li><strong>2. The Clean 3-Way Merge:</strong> If a teammate made changes to <code>main</code> (e.g. edited <code>index.html</code>) while you worked on <code>calculator.py</code>, Git automatically merges them because the edits were in completely different files.</li>
<li><strong>3. The Merge Conflict:</strong> If you and your classmate edit the **exact same line in the exact same file** on different branches and try to merge, Git gets confused and pauses to ask: <em>"Whose change should I keep?"</em></li>
</ul>
</div>

<div class="content-block">
<h2>💻 Path 2: The Terminal Way (A Conflicted Merge)</h2>
<p>Let's cause a Merge Conflict on purpose so we can learn how to fix it easily in VS Code!</p>

<h3>1. Setup the Conflict</h3>
<p>We need both branches to have different edits on the exact same line of <code>calculator.py</code>.</p>
<p>First, create a new branch and add a multiplication function:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch -c feature/multiply</span></pre>
</div>
<p>Open <code>calculator.py</code> and make it look like this:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">multiply</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">*</span> <span style="color: #f8f8f2">b</span></code></pre>
</div>
<p>Stage and commit it:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add multiplication function"</span></pre>
</div>

<p>Now, switch back to <code>main</code>. Let's pretend a coworker wrote a subtraction function on those exact same lines instead:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch main</span></pre>
</div>
<p>Open <code>calculator.py</code> (notice multiplication is gone since we are back on main) and change it to:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">subtract</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">-</span> <span style="color: #f8f8f2">b</span></code></pre>
</div>
<p>Stage and commit this subtraction function to <code>main</code>:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add subtraction function"</span></pre>
</div>

<h3>2. Trigger the Conflict</h3>
<p>Now, let's try to merge <code>feature/multiply</code> into <code>main</code>:</p>
<div class="code-block">
<pre><span class="cmd">$ git merge feature/multiply</span></pre>
</div>
<p><strong>💥 BOOM! Git warns you:</strong></p>
<div class="code-block">
<pre><span class="output">Auto-merging calculator.py
<span class="t-error">CONFLICT (content): Merge conflict in calculator.py</span>
Automatic merge failed; fix conflicts and then commit the result.</span></pre>
</div>

<h3>3. Resolve in VS Code</h3>
<p>Don't worry! Git simply paused the merge and added markers in your file. Open <code>calculator.py</code> in VS Code. It will look like this:</p>
<div class="code-block">
<div class="code-block-header"><span>Conflicted calculator.py in VS Code</span></div>
<pre>print("Welcome to the Calculator!")

<span style="color: #6272a4;">/* VS Code Buttons: Accept Current | Accept Incoming | Accept Both */</span>
<span style="color: #8be9fd;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span>
def subtract(a, b):
    return a - b
<span style="color: #8be9fd;">=======</span>
def multiply(a, b):
    return a * b
<span style="color: #8be9fd;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/multiply</span></pre>
</div>

<p>VS Code detects the conflict and gives you clickable buttons at the top of the highlighted code block:</p>
<ul>
  <li><strong>Accept Current Change:</strong> Keeps your subtraction function (the <code>main</code> code).</li>
  <li><strong>Accept Incoming Change:</strong> Keeps the multiplication function (the <code>feature/multiply</code> code).</li>
  <li><strong>Accept Both Changes:</strong> Keeps both functions! (Let's click this one, or manually delete the <code><<<<<<<</code>, <code>=======</code>, and <code>>>>>>>></code> lines so the code looks clean).</li>
</ul>

<div class="callout danger">
<div class="callout-title">🚫 Common Beginner Mistake</div>
<p>Do NOT run <code>git merge</code> again after fixing the conflict! Git is already in the middle of a merge, waiting for you to save your edits. You just need to add and commit the file normally to finish, as shown below!</p>
</div>

<h3>4. Finish and Sync</h3>
<p>Let's tell Git we've resolved the issue by staging and committing the file:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "Merge feature/multiply into main"</span>
<span class="cmd">$ git push</span></pre>
</div>
<p>🎉 Excellent! You successfully resolved a merge conflict like a professional developer.</p>
</div>

<div class="content-block">
<h2>📊 Reading the VS Code Git Graph</h2>
<p>Now look at your visual graph. It represents the history of your timelines joining back together:</p>
<img src="assets/vs-code-graph.png" alt="VS Code Git Graph" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px; margin-bottom: 20px;">
<ul>
  <li>The **blue line** represents your <code>main</code> timeline.</li>
  <li>The **pink line** splits off and meets back at the yellow dot ("Merge pull request #1").</li>
  <li>The circle dot at the top ("Merge feature/multiply into main") represents the local conflict merge you completed.</li>
</ul>
</div>
</div>


`;

CHAPTER_CONTENT["1.7"] = `
<div class="content-block">
<h2>🎬 Rebase: The Time Machine (Rewriting History)</h2>

<div class="callout best">
<div class="callout-title">💡 Completely Optional (Feel Free to Skip!)</div>
<p><strong>Note:</strong> Rebase is an advanced Git concept. Most development teams stick to standard merges (like we did in Chapter 1.6). Feel free to skip this chapter for now if you wish! But read through if you want to understand how it works.</p>
</div>

<p>Imagine you start styling your calculator app on a new branch called <code>feature/styles</code>:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch -c feature/styles</span></pre>
</div>

<h3>The Rebase Setup</h3>
<p>Let's set up a scenario where your branch falls behind changes made on <code>main</code>.</p>

<h4>1. Add a style commit</h4>
<p>Create a file named <code>style.css</code> on your branch:</p>
<div class="code-block">
<pre><span class="cmd">$ echo "body { background: blue; }" &gt; style.css</span>
<span class="cmd">$ git add style.css</span>
<span class="cmd">$ git commit -m "feat: add blue background"</span></pre>
</div>

<h4>2. Coworker updates Main</h4>
<p>Let's pretend a classmate updates the main branch. Switch to <code>main</code> and add a footer to <code>index.html</code>:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch main</span>
<span class="cmd">$ echo "&lt;footer&gt;Copyright 2026&lt;/footer&gt;" &gt; index.html</span>
<span class="cmd">$ git add index.html</span>
<span class="cmd">$ git commit -m "fix: add footer"</span></pre>
</div>
<p>Now, the <code>main</code> timeline has moved forward. Your <code>feature/styles</code> branch is falling behind!</p>

<h4>3. The Problem</h4>
<p>Switch back to your styles branch:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch feature/styles</span></pre>
</div>
<p>If you look at your files, the new <code>index.html</code> footer isn't there because your branch started from an older point in time.</p>
<p><strong>Why not just merge main?</strong> If you merge <code>main</code> into your branch, Git creates a new "Merge commit" just to connect the history. Do this every day, and your history gets cluttered with helper merge commits. It gets hard to see what work you actually did!</p>

<h4>4. The Rebase Solution!</h4>
<p>Rebase allows you to rewrite your branch's history, moving the start point (the base) to the latest commit on <code>main</code>.</p>

<div class="callout story">
<div class="callout-title">📖 Metaphor: Lifting and Pasting Stickers</div>
<p>Imagine your branch commits are stickers. Git temporarily lifts your commits (the blue background style work), updates the drawing underneath with the coworker's footer changes from `main`, and then glues your style stickers back down on top of the new foundation!</p>
</div>

<p>Let's run the rebase:</p>
<div class="code-block">
<pre><span class="cmd">$ git rebase main</span></pre>
</div>
<p>Your branch now has both the blue background and the new footer, and the history is a perfectly straight line with no extra merge commits! 🏁</p>

<h3>📊 Visualizing a Rebase</h3>
<p>Unlike standard merging, rebase alters the base of the branch, creating a linear history:</p>
<img src="assets/first_rebase.png" alt="Rebase Visualized" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px; margin-top: 10px; margin-bottom: 20px;">
</div>

<div class="content-block">
<h2>☠️ THE GOLDEN RULE OF REBASE</h2>
<div class="callout danger">
<div class="callout-title">⚠️ Never Rebase Public Code (The Golden Rule)</div>
<p><strong>NEVER rebase commits that you have already pushed to GitHub!</strong></p>
<p>Because rebase rewrites history (changing the commit ID hashes), if you rebase a branch that your teammate has already downloaded, you create two different timelines. The next time your teammate tries to sync, Git will crash, leading to duplicate commits, broken files, and lots of headaches trying to clean up the code. </p>
<p><strong>The Rule:</strong> Only use rebase to clean up your own local, private commits before pushing them to GitHub. Once it is public, treat history as unchangeable stone!</p>
</div>
</div>


`;

CHAPTER_CONTENT["1.8"] = `
<div class="content-block">
<h2>🎬 Stash: The Emergency Desk Drawer (Saving Temporary Edits)</h2>
<p><code>git stash</code> is a way to temporarily tuck away your unfinished code without making a permanent commit.</p>
<p>It's like telling Git: <em>"Hold my drawing tools for a second, I will be right back!"</em></p>
</div>

<div class="content-block">
<h2>📋 Real Example</h2>
<p>First, make sure you switch to your feature branch:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch feature/math-functions</span></pre>
</div>
<p>Your calculator file has the basic add function:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">b</span></code></pre>
</div>

<h3>Step 1: You Start Working</h3>
<p>You begin adding multiplication, subtraction, and division, but the code isn't fully working yet:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">multiply</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">*</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">subtract</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">-</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">divide</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">!=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">:</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">/</span> <span style="color: #f8f8f2">b</span>
    <span style="color: #66d9ef">return</span> <span style="color: #e6db74">"Error: Division by zero"</span></code></pre>
</div>

<h3>Step 2: An Emergency Bug Appears!</h3>
<p>Your team leader says: <em>"Quick! Switch to the main branch and fix a typo in the title!"</em></p>
<p>You try to switch branches: <code>git switch main</code>. But Git blocks you! Since you have unsaved changes in your workspace, switching branches could overwrite them. Git stops you to protect your code.</p>

<h3>Step 3: Stash Your Work</h3>
<p>To clear your desk without losing your unfinished equations, run stash:</p>
<div class="code-block">
<pre><span class="cmd">$ git stash</span></pre>
</div>
<p>Git sweeps all your unfinished edits and saves them in a hidden clipboard. Your <code>calculator.py</code> file instantly goes back to how it looked in your last commit! The unfinished math code disappears from view.</p>

<h3>Step 4: Fix the Bug</h3>
<p>Now your desk is clean, so switching branches works perfectly. You switch to main and fix the typo:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch main</span>
<span class="comment"># (You fix the bug and commit it...)</span></pre>
</div>

<h3>Step 5: Return to Your Work</h3>
<p>Switch back to your feature branch, and pull your unfinished code back out of hiding:</p>
<div class="code-block">
<pre><span class="cmd">$ git switch feature/math-functions</span>
<span class="cmd">$ git stash pop</span></pre>
</div>
<p>🎉 Magic! Your unfinished equations reappear in your editor, exactly where you left them!</p>
</div>

<div class="content-block">
<h2>🔑 Key Commands</h2>
<ul>
  <li><strong>Save changes:</strong> <code>git stash</code> (stores your unsaved edits).</li>
  <li><strong>Restore and clear:</strong> <code>git stash pop</code> (brings changes back and empties the stash).</li>
  <li><strong>List stashes:</strong> <code>git stash list</code> (view all your stashed edits).</li>
</ul>
</div>

<div class="content-block">
<h2>🗄️ Metaphor: The Desk Drawer</h2>
<div class="callout story">
<div class="callout-title">📖 Imagine...</div>
<p>Your workspace is your **study desk**. When your parent tells you to clean your desk for dinner, instead of throwing away your half-finished sketches, you slide them all into a **desk drawer (the stash)**. Once dinner is over, you open the drawer, place them back on the desk, and resume drawing!</p>
</div>
</div>

<div class="content-block">
<h2>⚖️ Commit vs. Stash</h2>
<ul>
  <li><strong>Commit (Zip bag):</strong> Permanent. Saves a snapshot to the project's official history timeline.</li>
  <li><strong>Stash (Drawer):</strong> Temporary. Saves edits in a private, local space. Stashes don't show up in history logs or on GitHub.</li>
</ul>
</div>


`;

CHAPTER_CONTENT["1.9"] = `
<div class="content-block">
<h2>🎬 Tags: Game Checkpoints (Marking Important Milestones)</h2>

<div class="callout best">
<div class="callout-title">📍 Picking Up From Chapter 1.8</div>
<p>We returned to our <code>feature/math-functions</code> branch and restored our work. Let's finish implementing our division and multiplication code, stage it, and commit it to save our progress:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add basic arithmetic functions"</span>
<span class="cmd">$ git push</span></pre>
</div>
</div>

<p>Now that our basic calculator code is complete and working, it is the perfect time to label it! This is where <strong>Tags</strong> come in.</p>

<h3>🏷️ What is a Tag?</h3>
<p>Timelines (branches) keep moving forward as you add new commits. But sometimes you want to mark a specific point in time, like version 1.0.0 of your app, so you can easily jump back to it later without looking up a confusing 40-character commit ID.</p>
<p>A **Tag** is an unchanging milestone. It is like carving a signpost into stone. Once you attach a tag to a commit, it stays pointing to that exact commit forever, even as the branch moves forward.</p>

<div class="callout story">
<div class="callout-title">🎮 Metaphor: Level Checkpoint Trophies</div>
<p>Imagine playing an adventure game. As you beat Level 1, the game saves a checkpoint. Even if you go on to Level 10 and make changes, you can always reload that exact **Level 1 Checkpoint (Tag)** to replay it from that precise moment.</p>
</div>
</div>

<div class="content-block">
<h2>🏷️ Creating Your First Tag</h2>
<p>Let's mark our current commits as Version 1.0.0:</p>
<div class="code-block">
<pre><span class="comment"># Create an annotated tag (-a) with a descriptive label (-m)</span>
<span class="cmd">$ git tag -a v1.0.0 -m "version 1.0.0 basic math features completed"</span></pre>
</div>

<h3>Lightweight vs. Annotated Tags</h3>
<ul>
  <li><strong>Lightweight Tags:</strong> Just a simple bookmark pointing to a commit ID. Created using: <code>git tag v1.0.0</code>.</li>
  <li><strong>Annotated Tags (Best Practice):</strong> Full objects that save who created the tag, the date, and a description. Always use these for official releases! Created using: <code>git tag -a v1.0.0 -m "message"</code>.</li>
</ul>

<h3>Pushing Tags to GitHub</h3>
<p><strong>⚠️ Crucial warning:</strong> Standard <code>git push</code> commands do NOT upload tags to GitHub! To upload your checkpoints, you must push them explicitly:</p>
<div class="code-block">
<pre><span class="comment"># Push a specific tag to the cloud</span>
<span class="cmd">$ git push origin v1.0.0</span>

<span class="comment"># (Or) Push all your local tags to GitHub at once</span>
<span class="cmd">$ git push --tags</span></pre>
</div>
</div>

<div class="content-block">
<h2>🚀 Adding New Work (Moving Forward)</h2>
<p>Let's add another math feature to our calculator: **Modulo**! Open <code>calculator.py</code> and add the function:</p>
<div class="code-block">
<pre><code><span style="color: #f8f8f2">print(</span><span style="color: #e6db74">"Welcome to the Calculator!"</span><span style="color: #f8f8f2">)</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">+</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">multiply</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">*</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">subtract</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">-</span> <span style="color: #f8f8f2">b</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">divide</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">if</span> <span style="color: #f8f8f2">b</span> <span style="color: #f92672">!=</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">:</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">/</span> <span style="color: #f8f8f2">b</span>
    <span style="color: #66d9ef">return</span> <span style="color: #e6db74">"Error: Division by zero"</span>

<span style="color: #66d9ef">def</span> <span style="color: #a6e22e">modulo</span><span style="color: #f8f8f2">(a, b):</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">a</span> <span style="color: #f92672">%</span> <span style="color: #f8f8f2">b</span></code></pre>
</div>

<p>Commit and push the new work:</p>
<div class="code-block">
<pre><span class="cmd">$ git add calculator.py</span>
<span class="cmd">$ git commit -m "feat: add modulo function"</span>
<span class="cmd">$ git push</span></pre>
</div>
<p>The branch timeline slides forward with this new commit. But our <code>v1.0.0</code> tag remains locked on our previous commit containing only basic math!</p>
</div>

<div class="content-block">
<h2>⏪ How to Teleport to a Tagged Version</h2>
<p>If you want to view or test your project exactly as it was in Version 1.0.0 without the modulo code, you don't need to search through commit logs. Just checkout the tag:</p>
<div class="code-block">
<pre><span class="cmd">$ git checkout v1.0.0</span></pre>
</div>
<p><strong>💥 Zoom!</strong> Your files automatically revert in your editor. The modulo function disappears! You are looking at the exact state of Version 1.0.0.</p>
<p>To return to your current work, switch back to your branch:</p>
<div class="code-block">
<pre><span class="cmd">$ git checkout feature/math-functions</span></pre>
</div>
<p>And your modulo function returns! Time-travel made simple. 🕰️</p>
</div>


`;

CHAPTER_CONTENT["1.10"] = `
<div class="content-block">
<h2>🎬 .gitignore: Keeping Your Repository Clean</h2>

<div class="callout story">
<div class="callout-title">📖 Metaphor: The School Guard's Blacklist</div>
<p>The staging area is like your **backpack**. The <code>.gitignore</code> file is the school guard's **banned item list**. If you put a banned item (like chewing gum or video game controllers) in your backpack, the guard halts you and makes you remove it. Similarly, anything written on the blacklist file (<code>.gitignore</code>) is completely blocked from entering Git storage or uploading to GitHub!</p>
</div>
</div>

<div class="content-block">
<h2>🛠️ Hands-On: Seeing .gitignore in Action</h2>
<p>Let's create a temporary file, ignore it, and see how it disappears from Git's radar!</p>

<h3>1. Create a temporary file</h3>
<p>In your project folder, create a file named exactly <code>temp.txt</code> and add some random text:</p>
<div class="code-block">
<pre><span class="cmd">$ echo "This is some temporary clutter" > temp.txt</span></pre>
</div>
<p>Check your status:</p>
<div class="code-block">
<pre><span class="cmd">$ git status</span></pre>
</div>
<p>As expected, <code>temp.txt</code> is listed in red under Untracked files.</p>

<h3>2. Create the .gitignore file</h3>
<p>Create a file in your project's main folder named exactly <code>.gitignore</code> (the dot at the beginning is important!). Inside, type the file name we want to ignore:</p>
<div class="code-block">
<div class="code-block-header"><span>.gitignore</span></div>
<pre><code>temp.txt</code></pre>
</div>

<h3>3. Verify Git ignores it</h3>
<p>Run status again:</p>
<div class="code-block">
<pre><span class="cmd">$ git status</span></pre>
</div>
<p><strong>Success!</strong> The <code>temp.txt</code> file has completely vanished from the status list! Git is ignoring it. It only sees your new <code>.gitignore</code> file.</p>

<h3>4. Push to GitHub</h3>
<p>Add, commit, and push your ignore file:</p>
<div class="code-block">
<pre><span class="cmd">$ git add .gitignore</span>
<span class="cmd">$ git commit -m "docs: add .gitignore and block temp.txt"</span>
<span class="cmd">$ git push</span></pre>
</div>
<p>Now, open GitHub. You will see your <code>.gitignore</code> file, but <code>temp.txt</code> is not there! It stays safely on your computer but never goes online.</p>
</div>

<div class="content-block">
<h2>📝 Mastering .gitignore Patterns</h2>
<p>Here is how you specify which files or directories to ignore:</p>
<ul>
  <li><strong>To ignore a specific file:</strong> Write the exact name.
    <div class="code-block"><pre><code>secrets.json</code></pre></div>
  </li>
  <li><strong>To ignore an entire folder:</strong> Add a slash (<code>/</code>) at the end. This ignores the folder and all its contents:
    <div class="code-block"><pre><code>logs/</code></pre></div>
  </li>
  <li><strong>To ignore all files of a certain type:</strong> Use an asterisk wildcard (<code>*</code>):
    <div class="code-block"><pre><code>*.log</code></pre></div>
  </li>
  <li><strong>To make an exception:</strong> Use an exclamation mark (<code>!</code>) in front of the pattern to say: <em>"Ignore all files of this type, EXCEPT this specific one"</em>:
    <div class="code-block"><pre><code>!important.log</code></pre></div>
  </li>
</ul>

<div class="code-block">
<div class="code-block-header"><span>Example .gitignore File</span></div>
<pre><span class="comment"># Ignore the massive code libraries installed by code environments</span>
node_modules/
venv/

<span class="comment"># Ignore all log files</span>
*.log

<span class="comment"># Except this crucial log!</span>
!critical.log</pre>
</div>
</div>

<div class="content-block">
<h2>🌍 What Do Developers Ignore?</h2>
<ol>
  <li><strong>Sensitive Information:</strong> Files containing API keys, database links, or passwords (like <code>.env</code> files). If you push these to GitHub, hackers can steal them!</li>
  <li><strong>Massive Library Folders:</strong> Folders like <code>venv/</code> or <code>node_modules/</code>. These folders are huge and can be re-installed using a simple terminal command. We ignore them to keep our repos small and fast.</li>
  <li><strong>System Files:</strong> Files created automatically by your operating system, like Mac's <code>.DS_Store</code>.</li>
</ol>

<h3>Global Gitignore</h3>
<p>To avoid adding personal computer files (like your editor configs) to every project's ignore list, you can set a global ignore file:</p>
<div class="code-block">
<pre><span class="cmd">$ git config --global core.excludesfile ~/.gitignore_global</span></pre>
</div>

<div class="callout danger">
<div class="callout-title">🚫 The "Already Tracked" Trap</div>
<p><strong>Note: .gitignore only blocks files that aren't tracked yet!</strong> If you accidentally commit a file containing secrets, and then add it to <code>.gitignore</code>, Git will keep tracking it!</p>
<p><strong>The Fix:</strong> You must explicitly tell Git to stop tracking it while keeping it on your disk:</p>
<pre><code>$ git rm --cached .env
$ git commit -m "Stop tracking .env file"</code></pre>
</div>
</div>
`;
