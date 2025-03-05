
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  Gift, 
  CreditCard, 
  User, 
  Clock, 
  RefreshCw,
  Lock, 
  Wallet, 
  ChevronRight,
  BadgeCheck,
  ArrowRight,
  Link,
  Ticket
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { useTheme } from "@/contexts/ThemeContext";

// Mock user data
const mockUserData = {
  email: "ruiqili1024@gmail.com",
  username: "lfan24",
  tokenBalance: 443583983,
  subscriptionTier: "Premium",
  tokenDiscount: "10%",
  subscriptionStartDate: "3/4/2025",
  subscriptionEndDate: "4/3/2025",
  dailyUsage: "1,200,000 / 1,200,000",
  resetsIn: "22:33:14",
  lastRefresh: "3/6/2025, 1:26:18 AM",
  dailyRewardClaimed: true
};

// Mock token logs
const mockTokenLogs = [
  { time: "3/6/2025, 12:09:07 AM", amount: 100000, event: "Daily Login Reward" },
  { time: "3/4/2025, 8:19:49 PM", amount: 1000000, event: "Initial Subscription Reward" },
  { time: "3/4/2025, 8:17:46 PM", amount: -400, event: "Transcription Request" },
  { time: "3/3/2025, 1:53:20 AM", amount: -81900, event: "Transcription Request" },
  { time: "3/2/2025, 9:37:39 PM", amount: -45720, event: "Transcription Request" },
  { time: "3/2/2025, 8:51:54 PM", amount: -45720, event: "Transcription Request" },
  { time: "3/2/2025, 8:50:49 PM", amount: -45720, event: "Transcription Request" },
  { time: "3/2/2025, 8:49:27 PM", amount: -45720, event: "Transcription Request" },
  { time: "3/2/2025, 4:37:19 PM", amount: -45720, event: "Transcription Request" },
  { time: "3/2/2025, 4:33:04 PM", amount: -45720, event: "Transcription Request" },
];

const AccountPage = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 min-h-screen">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight">
            {t('account.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('account.description')}
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-4 md:w-[600px] w-full">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{t('account.tabs.profile')}</span>
            </TabsTrigger>
            <TabsTrigger value="subscription" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">{t('account.tabs.subscription')}</span>
            </TabsTrigger>
            <TabsTrigger value="tokens" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">{t('account.tabs.tokens')}</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">{t('account.tabs.security')}</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {t('account.profile.title')}
                </CardTitle>
                <CardDescription>
                  {t('account.profile.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t('account.profile.email')}
                    </label>
                    <Input value={mockUserData.email} readOnly className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      {t('account.profile.username')}
                    </label>
                    <div className="flex items-center gap-2">
                      <Input value={mockUserData.username} readOnly className="bg-muted/50" />
                      <Link className="h-5 w-5 text-blue-500 cursor-pointer flex-shrink-0" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 pt-2">
                  <CTAButton 
                    variant="outline" 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    icon={<RefreshCw className="h-4 w-4" />}
                  >
                    {t('account.profile.refreshInfo')}
                  </CTAButton>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t('account.profile.website')}
                </CardTitle>
                <CardDescription>
                  {t('account.profile.websiteDescription')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <CTAButton 
                    className="w-full flex items-center justify-between"
                    icon={<CreditCard className="h-4 w-4" />}
                  >
                    {t('account.profile.manageWebsite')}
                    <ChevronRight className="h-4 w-4" />
                  </CTAButton>
                  
                  <CTAButton 
                    className="w-full flex items-center justify-between"
                    icon={<Ticket className="h-4 w-4" />}
                  >
                    {t('account.profile.manageTranslation')}
                    <ChevronRight className="h-4 w-4" />
                  </CTAButton>
                  
                  <CTAButton 
                    variant="secondary"
                    className="w-full flex items-center justify-between"
                    icon={<BadgeCheck className="h-4 w-4" />}
                  >
                    {t('account.profile.viewBookmarks')}
                    <ChevronRight className="h-4 w-4" />
                  </CTAButton>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t('account.subscription.title')}
                </CardTitle>
                <CardDescription>
                  {t('account.subscription.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t('account.subscription.tier')}
                    </span>
                    <p className="font-medium flex items-center gap-1">
                      <BadgeCheck className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      {mockUserData.subscriptionTier}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t('account.subscription.discount')}
                    </span>
                    <p className="font-medium">{mockUserData.tokenDiscount}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t('account.subscription.startDate')}
                    </span>
                    <p className="font-medium">{mockUserData.subscriptionStartDate}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t('account.subscription.endDate')}
                    </span>
                    <p className="font-medium">{mockUserData.subscriptionEndDate}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm font-medium">
                        {t('account.subscription.dailyUsage')}
                      </span>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">{mockUserData.dailyUsage}</p>
                        <p className="text-xs text-muted-foreground">
                          {t('account.subscription.resetsIn')} {mockUserData.resetsIn}
                        </p>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-1">
                        <div className={`h-full rounded-full ${isDark ? 'bg-blue-600' : 'bg-blue-500'}`} style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <CTAButton 
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    icon={<CreditCard className="h-4 w-4" />}
                  >
                    {t('account.subscription.manage')}
                  </CTAButton>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tokens Tab */}
          <TabsContent value="tokens" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  {t('account.tokens.title')}
                </CardTitle>
                <CardDescription>
                  {t('account.tokens.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className={`rounded-lg ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} p-5 border ${isDark ? 'border-blue-500/20' : 'border-blue-200'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Wallet className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="text-sm font-medium">{t('account.tokens.balance')}</span>
                    </div>
                    <p className="text-3xl font-bold">{mockUserData.tokenBalance.toLocaleString()}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <CTAButton 
                      className="w-full justify-center"
                      variant={mockUserData.dailyRewardClaimed ? "secondary" : "primary"}
                      icon={<Gift className="h-4 w-4" />}
                      disabled={mockUserData.dailyRewardClaimed}
                    >
                      {mockUserData.dailyRewardClaimed 
                        ? t('account.tokens.claimedDaily') 
                        : t('account.tokens.claimDaily')}
                    </CTAButton>
                    
                    <CTAButton 
                      variant="outline"
                      className="w-full justify-center"
                      icon={<Ticket className="h-4 w-4" />}
                    >
                      {t('account.tokens.redeemCode')}
                    </CTAButton>
                  </div>
                  
                  <CTAButton 
                    variant="primary"
                    className="w-full flex items-center justify-between mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4" />
                      <span>{t('account.tokens.takeSurvey')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`text-sm px-2 py-0.5 rounded-full ${isDark ? 'bg-emerald-800/60 text-emerald-200' : 'bg-emerald-100 text-emerald-800'}`}>
                        {t('account.tokens.new')}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CTAButton>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {t('account.tokens.history')}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {t('account.tokens.lastRefresh')} {mockUserData.lastRefresh}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className={`border-b ${isDark ? 'bg-muted/50' : 'bg-muted/80'}`}>
                          <th className="px-4 py-3 text-left font-medium">{t('account.tokens.time')}</th>
                          <th className="px-4 py-3 text-left font-medium">{t('account.tokens.amount')}</th>
                          <th className="px-4 py-3 text-left font-medium">{t('account.tokens.event')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockTokenLogs.map((log, index) => (
                          <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-background' : isDark ? 'bg-muted/30' : 'bg-muted/20'}`}>
                            <td className="px-4 py-3">{log.time}</td>
                            <td className={`px-4 py-3 font-medium ${log.amount > 0 ? (isDark ? 'text-green-400' : 'text-green-600') : ''}`}>
                              {log.amount > 0 ? `+${log.amount.toLocaleString()}` : log.amount.toLocaleString()}
                            </td>
                            <td className="px-4 py-3">{log.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <nav className="flex items-center gap-1 text-sm">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                      <button 
                        key={page}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${
                          page === 1 
                            ? (isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white') 
                            : 'hover:bg-muted'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </nav>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {t('account.security.title')}
                </CardTitle>
                <CardDescription>
                  {t('account.security.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      {t('account.security.password')}
                    </h3>
                    <CTAButton 
                      variant="outline"
                      className="w-full md:w-auto flex items-center justify-center gap-2"
                      icon={<Lock className="h-4 w-4" />}
                    >
                      {t('account.security.changePassword')}
                    </CTAButton>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      {t('account.security.billing')}
                    </h3>
                    <CTAButton 
                      className="w-full md:w-auto flex items-center justify-center gap-2"
                      icon={<CreditCard className="h-4 w-4" />}
                    >
                      {t('account.security.manageBilling')}
                    </CTAButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AccountPage;
