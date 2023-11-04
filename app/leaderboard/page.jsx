import React from "react";
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const userArray = [
  { name: "developer123", points: 1200 },
  { name: "coding_master", points: 1400 },
  { name: "code_ninja", points: 1100 },
  { name: "github_user1", points: 1300 },
  { name: "code_wizard", points: 1050 },
  { name: "repo_hacker", points: 1550 },
  { name: "tech_geek", points: 990 },
  { name: "git_lover", points: 1480 },
  { name: "open_source_dev", points: 1020 },
  { name: "web_developer", points: 1495 }
];

export default function leaderboard() {
  return (
    <div className="px-4 max-h-[70vh] flex justify-start items-start overflow-y-auto">
      <Table className="rounded-md">
        <TableCaption>Leaderboard points.</TableCaption>
        <TableHeader className="bg-sky-200 rounded-e-md">
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead className="w-1/3">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userArray.sort((a,b) => b.points-a.points).map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <Badge className="bg-green-400 cursor-pointer" variant="outline"> {user.points}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
