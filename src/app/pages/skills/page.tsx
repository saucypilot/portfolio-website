import React from 'react';
import Image from 'next/image';
import '../../styles/skillsPage.css';

const PageName = () => {
  return (
    <main>
      <div id="languagesSection" className="skillSections">
        <h1>Languages</h1>
        <div className="imagesWrapper">
          <Image src="/languagesImages/javascript.webp" alt="JavaScript logo" width={100} height={100} />
          <Image src="/languagesImages/typescript.png" alt="TypeScript logo" width={100} height={100} />
          <Image src="/languagesImages/cpp.png" alt="C++ logo" width={100} height={100} />
          <Image src="/languagesImages/csharp.png" alt="C# logo" width={100} height={100} />
          <Image src="/languagesImages/lua.png" alt="Lua logo" width={100} height={100} />
          <Image src="/languagesImages/assembly.png" alt="Assembly language logo" width={100} height={100} />
          <Image src="/languagesImages/python.png" alt="Python logo" width={100} height={100} />
          <Image src="/languagesImages/java.png" alt="Java logo" width={100} height={100} />
        </div>
      </div>
      <div id="frameworksSection" className="skillSections">
        <h1>Frameworks</h1>
        <div className="imagesWrapper">
          <Image src="/frameworkImages/unity.png" alt="Unity logo" width={100} height={100} />
          <Image src="/frameworkImages/react.webp" alt="React logo" width={100} height={100} />
          <Image src="/frameworkImages/nextjs.webp" alt="Next.js logo" width={100} height={100} />
          <Image src="/frameworkImages/opengl.svg" alt="OpenGL logo" width={100} height={100} />
          <Image src="/frameworkImages/threejs.png" alt="Three.js logo" width={100} height={100} />
          <Image src="/frameworkImages/mcreator.png" alt="Minecraft Editor logo" width={100} height={100} />
          <Image src="/frameworkImages/robloxStudio.png" alt="Roblox Studio logo" width={100} height={100} />
          <Image src="/frameworkImages/mongoDB.png" alt="MongoDB logo" width={100} height={100} />
          <Image src="/frameworkImages/nodejs.png" alt="Node.js logo" width={100} height={100} />
          <Image src="/frameworkImages/sql.webp" alt="SQL logo" width={100} height={100} />
        </div>
      </div>
      <div id="toolsSection" className="skillSections">
        <h1>Tools</h1>
        <div className="imagesWrapper">
          <Image src="/toolsImages/git.png" alt="Git logo" width={100} height={100} />
          <Image src="/toolsImages/visualStudio.png" alt="Visual Studio logo" width={100} height={100} />
          <Image src="/toolsImages/vsCode.png" alt="Visual Studio Code logo" width={100} height={100} />
          <Image src="/toolsImages/blender.png" alt="Blender logo" width={100} height={100} />
          <Image src="/toolsImages/obsidian.png" alt="Obsidian markdown logo" width={100} height={100} />
          <Image src="/toolsImages/codepen.png" alt="Codepen logo" width={100} height={100} />
          <Image src="/toolsImages/figma.svg" alt="Figma logo" width={100} height={100} />
          <Image src="/toolsImages/vercel.png" alt="Vercel logo" width={100} height={100} />
          <Image src="/toolsImages/windows.png" alt="Windows logo" width={100} height={100} />
          <Image src="/toolsImages/linux.png" alt="Linux logo" width={100} height={100} />
          <Image src="/toolsImages/oracle.png" alt="Oracle logo" width={100} height={100} />
        </div>
      </div>
    </main>
  );
};

export default PageName;
