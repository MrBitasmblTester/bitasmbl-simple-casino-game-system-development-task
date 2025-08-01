function App() {
  const { token, setToken } = useAuth();
  const [loading, setLoading] = useState(true); // NEW

  const [bio, setBio] = useState("");
  // const [username] = useState("");

  // const result = useIsMobile();
  const {
    username,
    setUsername,
    setFirstName,
    setLastName,
    firstName,
    lastName,
    uploadedFiles,
    setUploadedFiles,
    userRole,
    setUserRole,
    setLogoFile,
  } = useUser();
  console.log(userRole);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserRole(decoded.UserRole ?? null);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }

    setLoading(false); // done processing
  }, [token]);

  console.log(userRole);

  // console.log("skills:", skills);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#171717">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={<AuthenticatedLayout userRole={userRole} />}
          >
            <Route path="landing" element={<LandingPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="chatPage/:roomId" element={<ChatPage />} />
            <Route path="leaderboard" element={<LeaderBoardPage />} />
            <Route path="collaboration" element={<CollaborationUnderDev />} />
            <Route path="userprojects" element={<UserOwnedProjectsPage />} />
            {/* <CollaborationPage /> */}
            <Route path="projects/create" element={<CreatePostPage />} />.
            <Route path="developer-talent-pool" element={<TalentPoolPage />} />
            <Route path="password-reset" element={<PasswordResetPage />} />
            <Route path="password-recovery" element={<PasswordResetPage />} />
            <Route
              path="profile"
              element={
                userRole === "Developer" ? (
                  <DeveloperProfilePage />
                ) : (
                  <RecruiterProfilePage />
                )
              }
            />
          </Route>
          )
          }
          }
