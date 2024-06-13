
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
function PostCard() {
  return (
    <Card  className="border-0 rounded-xl overflow-hidden shadow-sm">
                <CardHeader className="flex items-center gap-4 p-4">
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="text-sm font-medium">Acme Inc</div>
                  </Link>
                  
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCT36HOrXMHedQaMnqCV341bxuQWwn3SvUcg&s"
                    width={400}
                    height={400}
                    alt="Image"
                    className="object-cover aspect-square"
                  />
                </CardContent>
                <CardFooter className="grid gap-2 p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <HeartIcon className="w-5 h-5" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircleIcon className="w-5 h-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <SendIcon className="w-5 h-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <BookmarkIcon className="w-5 h-5" />
                      <span className="sr-only">Save</span>
                    </Button>
                  </div>
                  <div className="text-sm">
                    <Link href="#" className="font-medium" prefetch={false}>
                      john
                    </Link>
                    Wow, this photo is absolutely stunning! 😍✨
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">View all 12 comments</div>
                </CardFooter>
              </Card>
  )
}


function BookmarkIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    )
  }
  
  
  function HeartIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  function SendIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    )
  }
  
  
  function MessageCircleIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }

export default PostCard