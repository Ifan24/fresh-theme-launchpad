
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Eye, EyeOff, UserPlus, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButton from "@/components/CTAButton";
import { toast } from "sonner";

const Signup = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast.error(t("auth.mustAgreeToTerms"));
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(t("auth.accountCreated"));
      // No actual navigation since we're just designing the frontend
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold">
            <User size={28} />
            <span>{t("common.title")}</span>
          </Link>
          <h1 className="text-2xl font-bold mt-6">{t("auth.createAccount")}</h1>
          <p className="text-muted-foreground mt-2">{t("auth.joinCommunity")}</p>
        </div>

        <Card className={`w-full ${isDark ? 'border-white/10 bg-black/20 backdrop-blur-sm' : ''}`}>
          <CardHeader>
            <CardTitle>{t("auth.signup")}</CardTitle>
            <CardDescription>{t("auth.fillDetails")}</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t("auth.fullName")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("auth.fullNamePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={isDark ? "border-white/10 bg-white/5" : ""}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t("auth.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={isDark ? "border-white/10 bg-white/5" : ""}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t("auth.password")}
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={isDark ? "border-white/10 bg-white/5 pr-10" : "pr-10"}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("auth.passwordRequirements")}
                </p>
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary/80"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  {t("auth.agreeToTerms")}{" "}
                  <Link to="/terms" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    {t("auth.termsOfService")}
                  </Link>{" "}
                  {t("auth.and")}{" "}
                  <Link to="/privacy" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    {t("auth.privacyPolicy")}
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <CTAButton
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isLoading}
                icon={<UserPlus size={18} />}
              >
                {isLoading ? t("auth.creating") : t("auth.createAccount")}
              </CTAButton>
              <p className="text-center text-sm text-muted-foreground">
                {t("auth.alreadyHaveAccount")}{" "}
                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                  {t("auth.login")}
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
